import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  logLevel: 'error',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // https://github.com/styleguidist/react-docgen-typescript

      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // shouldExtractValuesFromUnion: true,

      propFilter: (prop) => {
        if (prop.parent) {
          if (/node_modules/.test(prop.parent.fileName)) {
            if (/@radix-ui/.test(prop.parent.fileName)) {
              return true;
            }
            return false;
          }
        }
        if (['style', 'className', 'children'].includes(prop.name)) {
          return false;
        }
        return true;
      },
    },
  },
};
export default config;
