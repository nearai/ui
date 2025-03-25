import React from 'react';
import type { Preview } from '@storybook/react';
import { NearAiUiProvider } from '../src';
import { theme } from './theme';
import './styles.scss';

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
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </NearAiUiProvider>
    ),
  ],
};

export default preview;
