import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Text({ disabled = false, content = "Text", backgroundColorDisabled }: TextProps) {
  return (
    <StyledText disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {content}
    </StyledText>
  );
}

export default Text;
