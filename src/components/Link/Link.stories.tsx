import { StoryFn, Meta } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';

export default {
  title: 'ReactComponentLibrary/Link',
  component: Link,
  argTypes: {
    bold: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Link>;

interface LinkStoryProps extends LinkProps {
  visible: boolean;
}

const Template: StoryFn<LinkStoryProps> = (args) => (
  <>
    {args.visible && <Link {...args} />}
  </>
);

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  text: 'Primary Link',
  href: '#',
  visible: true,
};

export const BoldLink = Template.bind({});
BoldLink.args = {
  text: 'Bold Link',
  href: '#',
  bold: true,
  visible: true,
};

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  text: 'Disabled Link',
  href: '#',
  disabled: true,
  visible: true,
};
