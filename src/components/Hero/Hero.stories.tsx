import { StoryFn, Meta } from '@storybook/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';

export default {
  title: 'ReactComponentLibrary/Hero',
  component: Hero,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' }
  },
} as Meta<typeof Hero>;

interface HeroStoryProps extends HeroProps {
  visible: boolean;
}

const Template: StoryFn<HeroStoryProps> = (args) => (
  <>
    {args.visible && <Hero {...args} />}
  </>
);

export const PrimaryHero = Template.bind({});
PrimaryHero.args = {
  title: 'Primary Hero',
  subtitle: 'This is the primary hero component',
  visible: true,
};

export const DisabledHero = Template.bind({});
DisabledHero.args = {
  title: 'Disabled Hero',
  subtitle: 'This is the disabled hero component',
  disabled: true,
  visible: true,
};
