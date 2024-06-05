import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
  disabled: false,
  children: 'This is a text component',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  disabled: true,
  children: 'This text component is disabled',
};