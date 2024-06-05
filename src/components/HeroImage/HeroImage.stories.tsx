import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'ReactComponentLibrary/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const HeroImagePrimaryTest = Template.bind({});
HeroImagePrimaryTest.args = {
  src: 'https://via.placeholder.com/800x300',
  disabled: false,
};