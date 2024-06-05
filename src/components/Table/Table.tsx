import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
