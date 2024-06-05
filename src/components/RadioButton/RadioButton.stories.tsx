import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const RadioButtonPrimaryTest = Template.bind({});
RadioButtonPrimaryTest.args = {
  label: 'Radio Button',
  name: 'radio',
  value: 'value',
  disabled: false,
};

export const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  label: 'Radio Button',
  name: 'radio',
  value: 'value',
  disabled: true,
};