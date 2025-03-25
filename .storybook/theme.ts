import { create } from '@storybook/theming';

// @ts-expect-error
import NearAiLogo from './near-ai-logo.svg';

export const theme = create({
  base: 'dark',
  brandTitle: 'NEAR AI UI | Storybook',
  brandImage: NearAiLogo,
});
