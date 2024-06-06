import styled from "styled-components";

interface DropdownProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const StyledDropdown = styled.select`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;

  @media (min-width: 600px) {
    max-width: 80%;
  }

  @media (min-width: 900px) {
    max-width: 60%;
  }

  @media (min-width: 1200px) {
    max-width: 50%;
  }
`;

function Dropdown({ options, onChange, value }: DropdownProps) {
  return (
    <StyledDropdown onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
}

export default Dropdown;
