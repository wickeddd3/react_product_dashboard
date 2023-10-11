import List from '@mui/material/List';
import { SidebarData } from './SidebarData';
import SidebarItem from './SidebarItem';

export default function SidebarList({ drawerState, toggleDrawer }) {
  return (
    <List component="nav">
      {SidebarData.map((item, index) => (
        <SidebarItem
          item={item}
          key={index}
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
        />
      ))}
    </List>
  );
}
