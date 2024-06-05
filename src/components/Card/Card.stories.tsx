import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const CardPrimaryTest = Template.bind({});
CardPrimaryTest.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  disabled: false,
};
