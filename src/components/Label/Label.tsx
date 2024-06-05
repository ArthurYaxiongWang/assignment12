import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Label({ disabled = false, text = "Label", backgroundColorDisabled }: LabelProps) {
  return (
    <StyledLabel disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {text}
    </StyledLabel>
  );
}

export default Label;
