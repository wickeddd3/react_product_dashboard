import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <InsightsOutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Inventory2OutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <PeopleAltOutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Reports',
    path: '/',
    icon: <InsertChartOutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Accounts',
    icon: <SupervisedUserCircleOutlinedIcon />,
    type: 'submenu',
    subNav: [
      {
        title: 'Users',
        path: '/',
        icon: <PersonOutlineOutlinedIcon />,
        type: 'item',
      },
      {
        title: 'Admins',
        path: '/',
        icon: <PersonOutlineOutlinedIcon />,
        type: 'item',
      },
    ],
  },
  {
    title: 'Settings',
    icon: <SettingsOutlinedIcon />,
    type: 'submenu',
    subNav: [
      {
        title: 'Profile',
        path: '/',
        icon: <ManageAccountsOutlinedIcon />,
        type: 'item',
      },
      {
        title: 'General',
        path: '/',
        icon: <SettingsApplicationsOutlinedIcon />,
        type: 'item',
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    title: 'Saved reports',
    type: 'subheader',
  },
  {
    title: 'Current month',
    path: '/dashboard',
    icon: <DonutLargeOutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Last quarter',
    path: '/dashboard',
    icon: <DonutLargeOutlinedIcon />,
    type: 'item',
  },
  {
    title: 'Year-end sale',
    path: '/dashboard',
    icon: <DonutLargeOutlinedIcon />,
    type: 'item',
  },
];
