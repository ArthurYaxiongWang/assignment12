import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
  },
} as Meta<typeof Text>;

interface TextStoryProps extends TextProps {
  visible: boolean;
}

const Template: StoryFn<TextStoryProps> = (args) => (
  <>
    {args.visible && <Text {...args} />}
  </>
);

export const SmallText = Template.bind({});
SmallText.args = {
  content: 'Small Text',
  size: 'small',
  visible: true,
};

export const MediumText = Template.bind({});
MediumText.args = {
  content: 'Medium Text',
  size: 'medium',
  visible: true,
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: 'Large Text',
  size: 'large',
  visible: true,
};

export const BoldText = Template.bind({});
BoldText.args = {
  content: 'Bold Text',
  bold: true,
  visible: true,
};

export const UnderlineText = Template.bind({});
UnderlineText.args = {
  content: 'Underline Text',
  underline: true,
  visible: true,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  content: 'Disabled Text',
  disabled: true,
  visible: true,
};
