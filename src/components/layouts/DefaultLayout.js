import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../partials/Appbar.js';
import Sidebar from '../partials/Sidebar.js';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DefaultLayout() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ScrollRestoration />
        <Appbar
          drawerState={open}
          toggleDrawer={toggleDrawer}
        />
        <Sidebar
          drawerState={open}
          toggleDrawer={toggleDrawer}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
