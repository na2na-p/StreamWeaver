import { TextField } from '@mui/material';
import { forwardRef } from 'react';

import useTextInput from './TextInput.hooks';
import type { TextInputProps } from './TextInput.types';

export const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ sx, size = 'small', ...rest }, ref) => {
    const { sxMerged } = useTextInput({ sx });
    return (
      <TextField
        variant="standard"
        size={size}
        {...rest}
        sx={sxMerged}
        ref={ref}
      />
    );
  }
);
