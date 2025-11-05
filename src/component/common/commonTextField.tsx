import React from 'react';
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

interface CommonTextFieldProps extends Omit<TextFieldProps, 'variant' | 'onChange'> {
  label?: string;
  value?: string | number;
  onChange: (value: string) => void;
  type?: 'text' | 'number';
  placeholder?: string;
}

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  ...props
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          height: '40px',
          '& fieldset': {
            borderColor: '#d1d5db',
          },
          '&:hover fieldset': {
            borderColor: '#9ca3af',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#7c3aed',
          },
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.875rem',
          color: '#6b7280',
          '&.Mui-focused': {
            color: '#7c3aed',
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '8px 12px',
          fontSize: '0.875rem',
        },
      }}
      {...props}
    />
  );
};

export default CommonTextField;
