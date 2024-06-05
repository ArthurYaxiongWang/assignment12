import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot`
  background-color: #f5f5f5;
  text-align: left;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;