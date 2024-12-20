import { useState } from 'react';

import { TextInput } from '@/features/form/inputs/TextInput';
import { Button } from '@/features/ui/Button';
import { Stack } from '@/features/ui/Stack';
import { Typography } from '@/features/ui/Typography';

export const App = () => {
  const [obsConnected, _setObsConnected] = useState(false);
  return (
    <Stack>
      <Stack gap="4px">
        <Typography>Connection URL</Typography>
        <TextInput />
        <Stack direction="column">
          {obsConnected ? (
            <Stack gap="0">
              <Typography>Connected to OBS</Typography>
              <Button variant="contained" color="error">
                Disconnect
              </Button>
            </Stack>
          ) : (
            <Button variant="contained">Connect</Button>
          )}
        </Stack>
      </Stack>
      <Button variant="contained">test</Button>
    </Stack>
  );
};
