import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'ReactComponentLibrary/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof HeroImage>;

interface HeroImageStoryProps extends HeroImageProps {
  visible: boolean;
}

const Template: StoryFn<HeroImageStoryProps> = (args) => (
  <>
    {args.visible && <HeroImage {...args} />}
  </>
);

export const DefaultHeroImage = Template.bind({});
DefaultHeroImage.args = {
  disabled: false,
  label: 'Hero Image',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledHeroImage = Template.bind({});
DisabledHeroImage.args = {
  disabled: true,
  label: 'Hero Image',
  backgroundColorDisabled: '#ccc',
  visible: true
};
