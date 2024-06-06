import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'ReactComponentLibrary/Img',
  component: Img,
  argTypes: {
    backgroundColorDisabled: { control: 'color' },
    visible: { control: 'boolean' }
  }
} as Meta<typeof Img>;

interface ImgStoryProps extends ImgProps {
  visible: boolean;
}

const Template: StoryFn<ImgStoryProps> = (args) => (
  <>
    {args.visible && <Img {...args} />}
  </>
);

export const DefaultImg = Template.bind({});
DefaultImg.args = {
  disabled: false,
  src: 'https://via.placeholder.com/400',
  alt: 'Image',
  backgroundColorDisabled: '#ccc',
  visible: true
};

export const DisabledImg = Template.bind({});
DisabledImg.args = {
  disabled: true,
  src: 'https://via.placeholder.com/400',
  alt: 'Image',
  backgroundColorDisabled: '#ccc',
  visible: true
};
