import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;