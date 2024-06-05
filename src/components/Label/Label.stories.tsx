import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  disabled: false,
  children: 'This is a label',
  htmlFor: 'input-id',
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  disabled: true,
  children: 'This label is disabled',
  htmlFor: 'input-id',
};