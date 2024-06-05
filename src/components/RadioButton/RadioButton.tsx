import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input.attrs({ type: 'radio' })<{ disabled: boolean }>`
  margin-right: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ disabled = false, label, name, value, onChange }) => {
  return (
    <label>
      <StyledRadioButton disabled={disabled} name={name} value={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioButton;