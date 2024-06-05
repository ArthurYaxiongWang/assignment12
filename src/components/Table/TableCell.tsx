import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ disabled: boolean }>`
  padding: 8px;
  text-align: left;
  color: ${(props) => (props.disabled ? '#ccc' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
`;

const TableCell: React.FC<TableCellProps> = ({ disabled = false, children }) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>;
};

export default TableCell;