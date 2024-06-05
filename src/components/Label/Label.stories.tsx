import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'ReactComponentLibrary/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const LabelPrimaryTest = Template.bind({});
LabelPrimaryTest.args = {
  disabled: false,
  children: 'This is a label',
  htmlFor: 'input-id',
};
