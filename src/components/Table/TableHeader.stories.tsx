import { StoryFn, Meta } from '@storybook/react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'ReactComponentLibrary/TableHeader',
  component: TableHeader,
} as Meta<typeof TableHeader>;

const Template: StoryFn<TableHeaderProps> = (args) => <TableHeader {...args} />;

export const TableHeaderPrimaryTest = Template.bind({});
TableHeaderPrimaryTest.args = {
  children: (
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  ),
};