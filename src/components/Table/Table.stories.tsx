import { StoryFn, Meta } from '@storybook/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import { TableProps } from './Table.types';

export default {
  title: 'ReactComponentLibrary/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 4</TableCell>
        <TableCell>Cell 5</TableCell>
        <TableCell>Cell 6</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const TablePrimaryTest = Template.bind({});
TablePrimaryTest.args = {};
