import { StoryFn, Meta } from '@storybook/react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'ReactComponentLibrary/TableCell',
  component: TableCell,
} as Meta<typeof TableCell>;

const Template: StoryFn<TableCellProps> = (args) => <TableCell {...args} />;

export const TableCellPrimaryTest = Template.bind({});
TableCellPrimaryTest.args = {
  children: 'Cell content',
  disabled: false,
};
