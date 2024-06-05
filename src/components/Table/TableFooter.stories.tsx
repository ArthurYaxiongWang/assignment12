import { StoryFn, Meta } from '@storybook/react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'ReactComponentLibrary/TableFooter',
  component: TableFooter,
} as Meta<typeof TableFooter>;

const Template: StoryFn<TableFooterProps> = (args) => <TableFooter {...args} />;

export const TableFooterPrimaryTest = Template.bind({});
TableFooterPrimaryTest.args = {
  children: (
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  ),
};