import { StoryFn, Meta } from '@storybook/react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'ReactComponentLibrary/TableRow',
  component: TableRow,
} as Meta<typeof TableRow>;

const Template: StoryFn<TableRowProps> = (args) => <TableRow {...args} />;

export const TableRowPrimaryTest = Template.bind({});
TableRowPrimaryTest.args = {
  children: (
    <>
      <td>Row 1 Cell 1</td>
      <td>Row 1 Cell 2</td>
      <td>Row 1 Cell 3</td>
    </>
  ),
};