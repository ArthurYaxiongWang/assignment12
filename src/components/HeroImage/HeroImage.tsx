import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

interface StyledHeroImageProps {
  disabled: boolean;
  src: string; 
}

const StyledHeroImage = styled.div<StyledHeroImageProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 300px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, disabled = false }) => {
  return <StyledHeroImage src={src} disabled={disabled} />;
};

export default HeroImage;
