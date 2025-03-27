import { ThemeProvider } from 'next-themes';
import type { ForwardedRef } from 'react';
import { type ComponentProps, createContext, type ReactNode, useContext } from 'react';

type NearAiUi = {
  forcedTheme?: 'dark' | 'light';
  Link: (props: {
    children: ReactNode;
    className?: string;
    href: string;
    target?: ComponentProps<'a'>['target'];
    ref?: ForwardedRef<HTMLAnchorElement>;
  }) => ReactNode;
  useRouter: () => {
    prefetch: (path: string) => any;
    push: (path: string) => any;
  };
};

export const NearAiUiContext = createContext<NearAiUi | null>(null);

export const NearAiUiProvider = ({ value, children }: ComponentProps<typeof NearAiUiContext.Provider>) => {
  return (
    <ThemeProvider enableSystem={!value?.forcedTheme} forcedTheme={value?.forcedTheme} attribute="class">
      <NearAiUiContext.Provider value={value}>{children}</NearAiUiContext.Provider>
    </ThemeProvider>
  );
};

export function useNearAiUi() {
  const nearAiUi = useContext(NearAiUiContext);

  if (!nearAiUi)
    throw new Error(
      'NearAi UI context was not found within useNearAiUi(). Make sure to wrap your application with <NearAiUiProvider>',
    );

  return nearAiUi;
}
