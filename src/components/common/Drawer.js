import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import DynamicComponent from './DynamicComponent';

export default function Drawer({ show, component, anchor = 'right', closeDrawer }) {
  return (
    <div>
      <MuiDrawer
        anchor={anchor}
        open={show}
        onClose={() => closeDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={() => closeDrawer(false)}
          onKeyDown={() => closeDrawer(false)}
        >
          <DynamicComponent is={component} />
        </Box>
      </MuiDrawer>
    </div>
  );
}
