import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'ReactComponentLibrary/Text',
  component: Text,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Text>;

interface TextStoryProps extends TextProps {
  visible: boolean;
}

const Template: StoryFn<TextStoryProps> = (args) => (
  <>
    {args.visible && <Text {...args} />}
  </>
);

export const DefaultText = Template.bind({});
DefaultText.args = {
  disabled: false,
  content: 'Text',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  disabled: true,
  content: 'Text',
  backgroundColorDisabled: '#ccc',
  visible: true
};
