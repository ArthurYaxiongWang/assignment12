import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { within, userEvent } from '@storybook/testing-library';

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

DefaultButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("button"));
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Button',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  disabled: false,
  label: 'Hover Button',
  backgroundColorDisabled: '#ccc',
  visible: true
};

HoverButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByTestId("button"));
};
