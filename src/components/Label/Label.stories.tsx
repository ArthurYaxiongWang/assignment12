import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Label>;

interface LabelStoryProps extends LabelProps {
  visible: boolean;
}

const Template: StoryFn<LabelStoryProps> = (args) => (
  <>
    {args.visible && <Label {...args} />}
  </>
);

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  disabled: false,
  text: 'Label',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  disabled: true,
  text: 'Label',
  backgroundColorDisabled: '#ccc',
  visible: true
};
