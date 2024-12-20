import type { TypographyProps as MuiTypographyProps } from '@mui/material';
import type { ElementType } from 'react';

import type { TypographyVariant } from '@/features/ui/commons/Typography/TypographyVariant.types';

export type TypographyProps = MuiTypographyProps & {
  type?: TypographyVariant;
  isTruncated?: boolean;
  component?: ElementType;
};
