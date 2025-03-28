import { create } from '@storybook/theming';

// @ts-expect-error: This import is correct
import NearAiLogo from './near-ai-logo.svg';

export const theme = create({
  base: 'dark',
  brandTitle: 'NEAR AI UI | Storybook',
  brandImage: NearAiLogo,
});
