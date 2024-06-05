import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Img({ disabled = false, src, alt = "Image", backgroundColorDisabled }: ImgProps) {
  return (
    <StyledImg disabled={disabled} src={src} alt={alt} backgroundColorDisabled={backgroundColorDisabled} />
  );
}

export default Img;
