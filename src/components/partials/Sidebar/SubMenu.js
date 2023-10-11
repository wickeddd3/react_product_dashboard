import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from './MenuItem';

export default function SubMenu({ item, open, drawerState, handleClick, sx }) {
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={sx}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {item.subNav.map((nav, index) => (
            <MenuItem
              item={nav}
              key={index}
              sx={drawerState ? { pl: 4 } : null}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
}
