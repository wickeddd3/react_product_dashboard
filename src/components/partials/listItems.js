import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <>
    <ListItemButton
      component={Link}
      to={'/'}
    >
      <ListItemIcon>
        <InsightsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton
      component={Link}
      to={'/products'}
    >
      <ListItemIcon>
        <Inventory2OutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton
      component={Link}
      to={'/customers'}
    >
      <ListItemIcon>
        <PeopleAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton
      component={Link}
      to={'/'}
    >
      <ListItemIcon>
        <InsertChartOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader
      component="div"
      inset
    >
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DonutLargeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DonutLargeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DonutLargeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);
