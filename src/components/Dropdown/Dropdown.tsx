import styled from 'styled-components';
import { DropdownProps, Option } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  color: ${(props) => (props.disabled ? '#999' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, onChange }) => {
  return (
    <StyledSelect disabled={disabled} onChange={onChange}>
      {options.map((option: Option, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
