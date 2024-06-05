import style from "styled-components";
import { ButtonProps} from "./Button.types";

const StyledButton = style.button<{disabled: boolean}>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Button( {disabled = false, label = "button"}: ButtonProps) {
  return (
    <StyledButton disabled={disabled}>{label}</StyledButton>
  );
}

export default Button;