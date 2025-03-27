import { CaretCircleDown, CaretCircleUp } from '@phosphor-icons/react/dist/ssr';
import type {
  ComponentPropsWithRef,
  HTMLAttributeAnchorTarget,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { createContext, forwardRef, useContext, useEffect, useRef } from 'react';

import { useNearAiUi } from '../../context/NearAiUi';
import { mergeRefs } from '../../helpers/merge-refs';
import { Flex } from '../Flex';
import { Placeholder } from '../Placeholder';
import { SvgIcon } from '../SvgIcon';
import { type SortableTable } from './hooks';
import s from './Table.module.scss';

type RootProps = {
  children: ReactNode;
  className?: string;
  sort?: SortableTable;
  setSort?: (value: SortableTable) => unknown;
};

const TableContext = createContext<RootProps | undefined>(undefined);

export const Root = forwardRef<HTMLTableElement, RootProps>(function TableRoot({ className = '', ...props }, ref) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const headerHeightPixels = parseInt(
      getComputedStyle(document.body).getPropertyValue('--header-height').replace('px', ''),
    );

    let thead: HTMLElement | null = null;
    let tfoot: HTMLElement | null = null;

    function positionStickyElements() {
      /*
        Due to the table having overflow scroll to handle wide columns, 
        we can't rely on CSS "position: sticky" for the table header and 
        footer elements. So that's why we need a JS solution.
      */

      if (!root) return;

      if (!thead) {
        thead = root.querySelector('thead');
        tfoot = root.querySelector('tfoot');
      }

      if (thead?.getAttribute('data-sticky') === 'true') {
        const top = Math.max(0, (root.getBoundingClientRect().top - headerHeightPixels) * -1);

        thead.style.top = `${top}px`;
      }

      if (tfoot?.getAttribute('data-sticky') === 'true') {
        const bottom = Math.max(0, root.getBoundingClientRect().bottom - window.innerHeight);

        tfoot.style.bottom = `${bottom}px`;
      }
    }

    window.addEventListener('scroll', positionStickyElements, {
      passive: true,
    });

    const observer = new MutationObserver(() => {
      positionStickyElements();
    });

    observer.observe(root, {
      attributes: false,
      childList: true,
      subtree: true,
    });

    positionStickyElements();

    return () => {
      window.removeEventListener('scroll', positionStickyElements);
      observer.disconnect();
    };
  }, []);

  return (
    <TableContext.Provider value={props}>
      <div className={`${s.root} ${className}`} ref={rootRef}>
        <table className={s.table} ref={ref}>
          {props.children}
        </table>
      </div>
    </TableContext.Provider>
  );
});

type HeadProps = ComponentPropsWithRef<'thead'> & {
  sticky?: boolean;
};

export const Head = forwardRef<HTMLTableSectionElement, HeadProps>(function TableHead(
  { className = '', children, sticky = true, ...props },
  ref,
) {
  return (
    <thead className={`${s.head} ${className}`} data-sticky={sticky} ref={ref} {...props}>
      {children}
    </thead>
  );
});

type BodyProps = ComponentPropsWithRef<'tbody'>;

export const Body = forwardRef<HTMLTableSectionElement, BodyProps>(function TableBody(
  { className = '', ...props },
  ref,
) {
  return <tbody className={`${s.body} ${className}`} ref={ref} {...props} />;
});

type FootProps = ComponentPropsWithRef<'tfoot'> & {
  sticky?: boolean;
};

export const Foot = forwardRef<HTMLTableSectionElement, FootProps>(function TableFoot(
  { sticky = true, className = '', ...props },
  ref,
) {
  return <tfoot className={`${s.foot} ${className}`} data-sticky={sticky} ref={ref} {...props} />;
});

type RowProps = ComponentPropsWithRef<'tr'>;

export const Row = forwardRef<HTMLTableRowElement, RowProps>(function TableRow({ className = '', ...props }, ref) {
  const clickable = !!props.onClick;
  const role = clickable ? 'button' : undefined;
  const tabIndex = clickable ? 0 : undefined;
  const rowRef = useRef<HTMLTableRowElement | null>(null);

  const onKeyDown: KeyboardEventHandler<HTMLTableRowElement> = (event) => {
    if (props.onKeyDown) props.onKeyDown(event);

    if (event.key === 'Enter' && rowRef.current === event.target) {
      event.preventDefault();
      event.stopPropagation();
      event.target.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    }
  };

  return (
    <tr
      className={`${s.row} ${className}`}
      data-clickable={clickable}
      role={role}
      tabIndex={tabIndex}
      ref={mergeRefs([ref, rowRef])}
      {...props}
      onKeyDown={onKeyDown}
    />
  );
});

type HeadCellProps = ComponentPropsWithRef<'th'> &
  (
    | {
        column?: string;
        sortable?: never;
      }
    | {
        column: string;
        sortable:
          | boolean
          | {
              startingOrder: SortableTable['order'];
            };
      }
  );

export const HeadCell = forwardRef<HTMLTableCellElement, HeadCellProps>(function TableHeadCell(
  { children, column, sortable, className = '', ...props },
  ref,
) {
  const { sort, setSort } = useContext(TableContext)!;
  const clickable = !!props.onClick || !!sortable;
  const role = clickable ? 'button' : undefined;
  const tabIndex = clickable ? 0 : undefined;
  const columnHasActiveSort = sort?.column === column;
  const cellRef = useRef<HTMLTableCellElement | null>(null);

  const onKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (event) => {
    if (props.onKeyDown) props.onKeyDown(event);

    if (event.key === 'Enter' && cellRef.current === event.target) {
      event.preventDefault();
      event.stopPropagation();
      event.target.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    }
  };

  const onClick: MouseEventHandler<HTMLTableCellElement> = (event) => {
    if (props.onClick) props.onClick(event);

    if (!sortable || !column || !sort || !setSort) return;

    if (
      (columnHasActiveSort && sort.order === 'DESCENDING') ||
      (!columnHasActiveSort && typeof sortable === 'object' && sortable.startingOrder === 'ASCENDING')
    ) {
      setSort({
        column,
        order: 'ASCENDING',
      });
    } else {
      setSort({
        column,
        order: 'DESCENDING',
      });
    }
  };

  return (
    <th
      className={`${s.headCell} ${className}`}
      data-clickable={clickable}
      role={role}
      tabIndex={tabIndex}
      ref={mergeRefs([ref, cellRef])}
      {...props}
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      <Flex align="center" as="span" gap="s">
        {children}

        {columnHasActiveSort ? (
          <>
            {sort?.order === 'DESCENDING' && (
              <SvgIcon icon={<CaretCircleDown weight="duotone" />} size="xs" color="violet-10" />
            )}
            {sort?.order === 'ASCENDING' && (
              <SvgIcon icon={<CaretCircleUp weight="duotone" />} size="xs" color="violet-10" />
            )}
          </>
        ) : (
          <>{sortable && <SvgIcon icon={<CaretCircleDown />} size="xs" />}</>
        )}
      </Flex>
    </th>
  );
});

type CellProps = ComponentPropsWithRef<'td'> & {
  disabled?: boolean;
  href?: string;
  spanAllColumns?: boolean;
  target?: HTMLAttributeAnchorTarget;
};

export const Cell = forwardRef<HTMLTableCellElement, CellProps>(function TableCell(
  { children, disabled, href, spanAllColumns, target, className = '', ...props },
  ref,
) {
  const clickable = !!props.onClick || !!href;
  const isButton = !!props.onClick && !href;
  const role = isButton ? 'button' : undefined;
  const tabIndex = isButton ? (disabled ? -1 : 0) : undefined;
  const { Link } = useNearAiUi();
  const cellRef = useRef<HTMLTableCellElement | null>(null);

  const onKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (event) => {
    if (props.onKeyDown) props.onKeyDown(event);

    if (event.key === 'Enter' && cellRef.current === event.target) {
      event.preventDefault();
      event.stopPropagation();
      event.target.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
    }
  };

  return (
    <td
      className={`${s.cell} ${className}`}
      aria-disabled={disabled}
      data-clickable={clickable}
      role={role}
      tabIndex={tabIndex}
      ref={mergeRefs([ref, cellRef])}
      {...props}
      colSpan={spanAllColumns ? 10_000 : props.colSpan}
      onKeyDown={onKeyDown}
    >
      {href ? (
        <>
          <Link href={href} className={s.cellAnchor} target={target}>
            {children}
          </Link>

          <span className={s.cellAnchorHiddenChildren} aria-hidden="true">
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </td>
  );
});

export const PlaceholderRows = () => {
  return (
    <>
      <tr className={s.row}>
        <td className={s.cell} colSpan={10000}>
          <Placeholder />
        </td>
      </tr>
      <tr className={s.row}>
        <td className={s.cell} colSpan={10000}>
          <Placeholder />
        </td>
      </tr>
      <tr className={s.row}>
        <td className={s.cell} colSpan={10000}>
          <Placeholder />
        </td>
      </tr>
    </>
  );
};
