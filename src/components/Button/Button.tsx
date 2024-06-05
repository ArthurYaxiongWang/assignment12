import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Button({ disabled = false, label = "button", backgroundColorDisabled }: ButtonProps) {
  return (
    <StyledButton disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {label}
    </StyledButton>
  );
}

export default Button;
