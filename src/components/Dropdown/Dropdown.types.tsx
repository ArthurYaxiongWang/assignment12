export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
