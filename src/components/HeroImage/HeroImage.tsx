import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHeroImage = styled.div<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 20px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function HeroImage({ disabled = false, label = "Hero Image", backgroundColorDisabled }: HeroImageProps) {
  return (
    <StyledHeroImage disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {label}
    </StyledHeroImage>
  );
}

export default HeroImage;
