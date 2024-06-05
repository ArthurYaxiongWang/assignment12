import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Button>;

interface ButtonStoryProps extends ButtonProps {
  visible: boolean;
}

const Template: StoryFn<ButtonStoryProps> = (args) => (
  <>
    {args.visible && <Button {...args} />}
  </>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  disabled: false,
  label: 'Button',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Button',
  backgroundColorDisabled: '#ccc',
  visible: true
};
