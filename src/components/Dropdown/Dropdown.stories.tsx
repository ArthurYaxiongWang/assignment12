import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const DropdownPrimaryTest = Template.bind({});
DropdownPrimaryTest.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
};
