import { type ComponentProps } from 'react';

import { Card } from '../Card';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Timestamp } from '../Timestamp';
import s from './Article.module.scss';

type Props = {
  author?: string;
  date?: Date;
  description?: string;
  href: string;
  imageUrl?: string;
  target?: ComponentProps<'a'>['target'];
  title: string;
};

export const Article = ({ imageUrl, title, description, author, date, ...props }: Props) => {
  return (
    <Card className={s.article} {...props} gap="m" padding="l">
      {imageUrl && (
        <div className={s.image}>
          <img alt={title} src={imageUrl} />
        </div>
      )}

      <Flex direction="column" gap="s">
        <Flex gap="s" align="center">
          {author && (
            <Text size="text-xs" weight={500}>
              {author}
            </Text>
          )}

          {author && date && (
            <Text size="text-s" as="span" aria-hidden="true">
              •
            </Text>
          )}

          {date && (
            <Text size="text-xs" weight={500}>
              <Timestamp
                date={date}
                options={{
                  dateStyle: 'long',
                }}
              />
            </Text>
          )}
        </Flex>

        <Text as="h3" indicateParentClickable>
          {title}
        </Text>

        {description && <Text>{description}</Text>}
      </Flex>
    </Card>
  );
};
