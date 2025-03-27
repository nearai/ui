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
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </NearAiUiProvider>
    ),
  ],
};

export default preview;
