import type { TextFieldProps } from '@mui/material';

import type { Length } from '@/features/ui/types/Length.types';

export type TextInputProps = Omit<TextFieldProps, 'label'> & {
  width?: Length;
};
