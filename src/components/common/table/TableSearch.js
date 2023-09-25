import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

export default function TableSearch(props) {
  const {
    variant = 'standard',
    size = 'small',
    label = '',
    name = 'table-search-field',
    placeholder = 'Search...',
    value,
    setValue,
  } = props;

  return (
    <OutlinedInput
      id="search-input-with-icon-textfield"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      variant={variant}
      size={size}
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
