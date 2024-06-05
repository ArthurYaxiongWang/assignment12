import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#ccc' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
  font-size: 16px;
`;

const Text: React.FC<TextProps> = ({ disabled = false, children }) => {
  return <StyledText disabled={disabled}>{children}</StyledText>;
};

export default Text;
