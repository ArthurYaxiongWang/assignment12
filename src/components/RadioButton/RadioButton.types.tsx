export interface RadioButtonProps {
  disabled?: boolean;
  label: string;
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}