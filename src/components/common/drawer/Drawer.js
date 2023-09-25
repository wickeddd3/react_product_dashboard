import { useContext, useCallback } from 'react';
import DrawerContext from '../../../contexts/DrawerContext';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import DynamicComponent from '../DynamicComponent';

export default function Drawer({ children, ...rest }) {
  const { drawer, setDrawer } = useContext(DrawerContext);
  const { show, component, anchor } = drawer;

  const resetDrawer = useCallback(() => {
    setDrawer({ show: false, component: null, anchor: 'right' });
  }, [setDrawer]);

  if (!show) return null;

  return (
    <div>
      <MuiDrawer
        {...rest}
        anchor={anchor}
        open={show}
        onClose={() => resetDrawer()}
      >
        {children}
        <Box
          sx={{ width: 350 }}
          role="presentation"
        >
          <DynamicComponent
            is={component}
            close={resetDrawer}
          />
        </Box>
      </MuiDrawer>
    </div>
  );
}
