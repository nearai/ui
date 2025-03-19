import { type ComponentProps, type ReactNode } from 'react';

import { useNearAiUi } from '../context/NearAiUi';
import s from './Article.module.scss';

type Props = {
  href: string;
  target?: ComponentProps<'a'>['target'];
  src: string;
  alt: string;
  children?: ReactNode;
};

export const Article = ({ alt, src, children, ...props }: Props) => {
  const { Link } = useNearAiUi();

  return (
    <Link className={s.article} {...props}>
      <div className={s.image}>
        <img alt={alt} src={src} />
      </div>

      {children}
    </Link>
  );
};
