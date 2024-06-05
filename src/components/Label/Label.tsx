import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#ccc' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
  font-size: 16px;
`;

const Label: React.FC<LabelProps> = ({ disabled = false, children, htmlFor }) => {
  return <StyledLabel disabled={disabled} htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;