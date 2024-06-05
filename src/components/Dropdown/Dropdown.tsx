import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Dropdown({ disabled = false, options = [], backgroundColorDisabled }: DropdownProps) {
  return (
    <StyledDropdown disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
}

export default Dropdown;
