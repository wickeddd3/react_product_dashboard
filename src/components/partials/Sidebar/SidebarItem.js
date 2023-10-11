import { useState } from 'react';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

export default function SidebarItem({ item, drawerState, toggleDrawer }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!drawerState) {
      toggleDrawer();
      setOpen(true);
      return;
    }
    setOpen(!open);
  };

  let menuItem = null;

  if (item.type === 'item') {
    menuItem = (
      <MenuItem
        item={item}
        sx={!drawerState ? { pl: 2.8 } : null}
      />
    );
  }

  if (item.type === 'divider') {
    menuItem = <Divider sx={{ my: 1 }} />;
  }

  if (item.type === 'subheader' && drawerState) {
    menuItem = (
      <ListSubheader
        component="div"
        inset
      >
        {item.title}
      </ListSubheader>
    );
  }

  if (item.type === 'submenu') {
    menuItem = (
      <SubMenu
        item={item}
        open={drawerState ? open : false}
        drawerState={drawerState}
        handleClick={handleClick}
        sx={!drawerState ? { pl: 2.8 } : null}
      />
    );
  }

  return menuItem;
}
