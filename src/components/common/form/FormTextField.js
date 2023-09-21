import TextField from '@mui/material/TextField';

export default function FormTextField(props) {
  const {
    id = 'textField',
    name = 'textField',
    label = '',
    autoComplete = 'textField',
    size = 'small',
    value,
    setValue,
  } = props;
  return (
    <TextField
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      size={size}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
