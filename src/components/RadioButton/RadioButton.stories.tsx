import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof RadioButton>;

interface RadioButtonStoryProps extends RadioButtonProps {
  visible: boolean;
}

const Template: StoryFn<RadioButtonStoryProps> = (args) => (
  <>
    {args.visible && <RadioButton {...args} />}
  </>
);

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  disabled: false,
  name: 'radioGroup',
  value: 'Option1',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  disabled: true,
  name: 'radioGroup',
  value: 'Option1',
  backgroundColorDisabled: '#ccc',
  visible: true
};
