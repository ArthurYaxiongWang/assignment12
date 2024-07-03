import { StoryFn, Meta } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';

export default {
  title: 'ReactComponentLibrary/Section',
  component: Section,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Section>;

interface SectionStoryProps extends SectionProps {
  visible: boolean;
}

const Template: StoryFn<SectionStoryProps> = (args) => (
  <>
    {args.visible && <Section {...args}>{args.children}</Section>}
  </>
);

export const PrimarySection = Template.bind({});
PrimarySection.args = {
  children: 'Primary Section Content',
  visible: true,
};

export const DisabledSection = Template.bind({});
DisabledSection.args = {
  children: 'Disabled Section Content',
  disabled: true,
  visible: true,
};
