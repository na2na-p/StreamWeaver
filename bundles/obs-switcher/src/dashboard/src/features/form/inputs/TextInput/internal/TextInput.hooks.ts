import type { SxProps, Theme } from '@mui/material';
import { useMemo } from 'react';

import LEGEND_DISPLAY_NONE from '@/features/ui/commons/inputSx/LEGEND_DISPLAY_NONE';
import mergeSx from '@/features/utils/mergeSx';

import { DEFAULT_SX } from './TextInput.constants';

type Props = {
  sx?: SxProps<Theme>;
};

const useTextInput = ({ sx }: Props) => {
  const sxMerged = useMemo(
    () => mergeSx(LEGEND_DISPLAY_NONE, DEFAULT_SX, sx),
    [sx]
  );

  return {
    sxMerged,
  } as const;
};

export default useTextInput;
