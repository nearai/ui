import { X } from '@phosphor-icons/react/dist/ssr';
import { type ReactNode, useCallback, useEffect, useRef } from 'react';

import { Button } from '../Button';
import { Text } from '../Text';
import s from './Banner.module.scss';
import { useBanner } from './hooks';

type Props = {
  /*
    NOTE: If an updated banner with new content is desired, consider changing the passed "bannerId" to 
    make sure users who had hidden the previous banner will see the new banner content.
  */

  bannerId: string;
  actions?: ReactNode;
  message: ReactNode;
};

export const Banner = ({ actions, bannerId, message }: Props) => {
  const { bannerIsHidden, hideBanner } = useBanner(bannerId);
  const ref = useRef<HTMLDivElement | null>(null);

  const updateBannerHeightProperty = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const offsetHeight = Math.max(element.offsetHeight - window.scrollY, 0);

    if (bannerIsHidden) {
      document.body.style.removeProperty('--banner-nav-offset-height');
    } else {
      document.body.style.setProperty('--banner-nav-offset-height', `${offsetHeight}px`);
    }
  }, [bannerIsHidden]);

  useEffect(() => {
    updateBannerHeightProperty();

    function listener() {
      updateBannerHeightProperty();
    }

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerIsHidden]);

  if (bannerIsHidden) return null;

  return (
    <div className={s.banner} ref={ref}>
      <Text weight="500" size="text-s" color="sand-12">
        {message}
      </Text>

      {actions && <div className={s.actions}>{actions}</div>}

      <Button
        onClick={hideBanner}
        label="Close"
        icon={<X weight="bold" />}
        size="small"
        variant="secondary"
        fill="ghost"
      />
    </div>
  );
};
