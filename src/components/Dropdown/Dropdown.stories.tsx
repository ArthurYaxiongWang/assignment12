import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Dropdown>;

interface DropdownStoryProps extends DropdownProps {
  visible: boolean;
}

const Template: StoryFn<DropdownStoryProps> = (args) => (
  <>
    {args.visible && <Dropdown {...args} />}
  </>
);

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  disabled: false,
  options: ['Option 1', 'Option 2', 'Option 3'],
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  disabled: true,
  options: ['Option 1', 'Option 2', 'Option 3'],
  backgroundColorDisabled: '#ccc',
  visible: true
};