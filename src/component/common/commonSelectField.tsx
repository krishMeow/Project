import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

interface SelectOption {
  value: string;
  label: string;
}

interface CommonSelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

const CommonSelectField: React.FC<CommonSelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel
        sx={{
          fontSize: '0.875rem',
          color: '#6b7280',
          '&.Mui-focused': {
            color: '#7c3aed',
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        sx={{
          height: '40px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d1d5db',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9ca3af',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7c3aed',
          },
          '& .MuiSelect-select': {
            padding: '8px 12px',
            fontSize: '0.875rem',
          },
        }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            <em style={{ color: '#9ca3af' }}>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelectField;
