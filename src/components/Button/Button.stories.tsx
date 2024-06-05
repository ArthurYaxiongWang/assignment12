import {StoryFn, Meta} from '@storybook/react';
import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  disabled: false,
  label: 'Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Button',
};