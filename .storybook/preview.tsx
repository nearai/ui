import './styles.scss';

import type { Preview } from '@storybook/react';
import React from 'react';

import { NearAiUiProvider, Toaster } from '../src';
import { theme } from './theme';

const useRouter = () => {
  return {
    prefetch: () => {},
    replace: () => {},
    push: () => {},
  };
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        items: [
          {
            value: 'dark',
            title: 'Dark',
            icon: 'moon',
          },
          {
            value: 'light',
            title: 'Light',
            icon: 'sun',
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'dark',
  },

  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
    },
    options: {
      // The storySort() method is passed as raw JS and can't include any TS syntax
      storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
    },
  },

  decorators: [
    (Story, context) => (
      <NearAiUiProvider
        value={{
          forcedTheme: context.globals.theme,
          Link: (props) => <a {...props} />,
          useRouter: useRouter,
        }}
      >
        <Toaster />
        <Story />
      </NearAiUiProvider>
    ),
  ],
};

export default preview;
