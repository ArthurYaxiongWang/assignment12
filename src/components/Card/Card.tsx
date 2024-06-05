import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled: boolean }>`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const Card: React.FC<CardProps> = ({ title, content, disabled = false }) => {
  return (
    <StyledCard disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
