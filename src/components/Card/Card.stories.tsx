import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'ReactComponentLibrary/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const DefaultCard  = Template.bind({});
DefaultCard.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  disabled: false,
};

export const DisabledCard = Template.bind({});
DisabledCard.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  disabled: true,
};