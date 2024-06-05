import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'ReactComponentLibrary/Img',
  component: Img,
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const ImgPrimaryTest = Template.bind({});
ImgPrimaryTest.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: false,
};
