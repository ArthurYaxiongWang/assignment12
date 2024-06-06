import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

function Text({ content }: TextProps) {
  return <StyledText>{content}</StyledText>;
}

export default Text;
