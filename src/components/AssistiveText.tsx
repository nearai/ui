import { CheckCircle, WarningCircle } from '@phosphor-icons/react';

import { type ThemeInputVariant } from '../utils/theme';
import { Flex } from './Flex';
import { SvgIcon } from './SvgIcon';
import { Text } from './Text';

type Props = {
  message?: string;
  variant: ThemeInputVariant;
  id?: string;
};

export const AssistiveText = ({ message, variant, id }: Props) => {
  if (!message) return null;

  if (variant === 'error') {
    return (
      <Flex gap="xs" align="center">
        <SvgIcon icon={<WarningCircle weight="bold" />} color="red-9" size="xs" />
        <Text color="red-11" size="text-xs" id={id}>
          {message}
        </Text>
      </Flex>
    );
  } else if (variant === 'success') {
    return (
      <Flex gap="xs" align="center">
        <SvgIcon icon={<CheckCircle weight="bold" />} color="green-9" size="xs" />
        <Text color="green-11" size="text-xs" id={id}>
          {message}
        </Text>
      </Flex>
    );
  } else {
    return (
      <Text color="sand-11" size="text-xs" id={id}>
        {message}
      </Text>
    );
  }
};
