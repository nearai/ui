import { openToast } from '../components/Toast';

const foo = 'foo';

export async function copyTextToClipboard(content: string, description?: string) {
  try {
    await navigator.clipboard.writeText(content);

    openToast({
      type: 'success',
      title: 'Copied To Clipboard',
      description,
    });
  } catch (error) {
    console.error(error);
    openToast({
      type: 'error',
      title: 'Copy Failed',
      description: 'Failed to copy to clipboard. Please try again later.',
    });
  }
}
