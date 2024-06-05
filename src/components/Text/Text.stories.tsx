import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const TextPrimaryTest = Template.bind({});
TextPrimaryTest.args = {
  disabled: false,
  children: 'This is a text component',
};
