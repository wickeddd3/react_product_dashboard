import { useState } from 'react';
import DrawerContext from '../contexts/DrawerContext';

function DrawerProvider({ children, ...props }) {
  const [drawer, setDrawer] = useState({
    show: false,
    component: null,
    anchor: 'right',
  });

  return (
    <DrawerContext.Provider
      value={{ drawer, setDrawer }}
      {...props}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
