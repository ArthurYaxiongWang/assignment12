import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead`
  background-color: #f5f5f5;
  text-align: left;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
