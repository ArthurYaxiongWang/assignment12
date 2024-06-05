import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 20px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Card({ disabled = false, label = "Card", backgroundColorDisabled }: CardProps) {
  return (
    <StyledCard disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {label}
    </StyledCard>
  );
}

export default Card;
