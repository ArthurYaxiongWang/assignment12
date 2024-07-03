import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';
import { within, userEvent } from '@storybook/testing-library';

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

DefaultImg.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('img'));
};

export const DisabledImg = Template.bind({});
DisabledImg.args = {
  disabled: true,
  src: 'https://via.placeholder.com/400',
  alt: 'Image',
  backgroundColorDisabled: '#ccc',
  visible: true
};
