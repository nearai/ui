# NEAR AI UI

A React component library that implements the official design system of NEAR AI.

## Required Peer Dependencies

**React 18**

**Zustand 4** - Our `openToast()` method is able to work in any context due to relying on a Zustand global store.

## Installation & Setup

```bash
pnpm add zustand
pnpm add @nearai/ui
```

In your root `layout.tsx` file, wrap your application with the `<NearAiUiProvider>` and pass in your framework's `<Link>` component and router methods. You'll also want to include the `<Toaster />` component to display toasts when calling `openToast()`.

```tsx
'use client';

import '@nearai/ui/styles.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NearAiUiProvider, Toaster } from '@nearai/ui';

/*
  The suppressHydrationWarning on <html> is required by next-theme's <ThemeProvider>:
  https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
*/

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>

      <body>
        <NearAiUiProvider
          value={{
            Link,
            useRouter
          }}
        >
          <Toaster />
          <main>{children}</main>
        </NearAiUiProvider>
      </body>
    </html>
  );
}
```

Why is `<NearAiUiProvider>` needed? Some of our components render anchor tags or dynamically change the current route. This provider allows our library to support any React framework (Vanilla/Vite, Next JS, etc) by passing in your router's components and hooks. It also supports dark/light mode and opts into the user's preferred theme via [next-theme](ttps://github.com/pacocoursey/next-themes).

## Documentation

Please refer to `README.md` files in `src/components` for examples and documentation of components.

## Contributing

This project requires [pnpm](https://pnpm.io/installation) version `10.6.5`. The strict version requirement will help keep our lockfile consistent as more developers contribute. Make sure you have the correct version of `pnpm` installed:

```bash
pnpm -v # This should output 10.6.5
npm install -g pnpm@10.6.5 # Install the correct version if needed
```

Run these commands to begin local development and watch for changes:

```bash
pnpm dev
pnpm test:watch
```

- Create a branch off of `main`
- Test your local changes
- Push a PR for review

## Test Local Changes

Follow these steps to preview local changes to the UI library within any project that depends on the library:

- Have your project and the UI library cloned as siblings. EG: `projects/cool-project` and `projects/nearai-ui`.
- Inside `nearai-ui`, run `pnpm dev`.
- Inside your project folder, run `pnpm add file:../nearai-ui`.
- After making any changes to `nearai-ui`, you will need to restart your project's development server for the component changes to appear locally within your project.
- Once you're done testing changes, make sure you revert the changes in your project's `package.json` and lock file so that you're no longer referencing the local file protocol (eg: `file:../nearai-ui`).

_NOTE: Due to this library having peer dependencies, `pnpm link` isn't compatible - that's why we have to rely on using `file:` instead._

## Viewing Package Statistics

After you've run `pnpm build` or `pnpm dev`, a `stats.html` file will be generated to show a visual breakdown of the size of the library based on source code and dependencies. You can open this in your browser by running:

```bash
open ./stats.html
```

This can be helpful to catch or debug a dependency that might have bloated the package size.

## Publishing a Release

- Merge all desired changes into `main` via pull requests.
- Determine the version number for the new release.
- Push updated `version` field in `package.json` to `main`.
- Create a new release via GitHub: https://github.com/near/nearai-ui/releases/new
- Use updated `version` value as the new `tag` and `Release title` value and use `main` as the target branch.
- Click the publish button.
- A GitHub workflow will kick off to automatically publish a new version to NPM: https://github.com/near/nearai-ui/actions/workflows/publish-to-npm.yml
- The new version number published to NPM will be driven by the value in `package.json`.
- Confirm published changes by visiting package: https://www.npmjs.com/package/@nearai/ui
