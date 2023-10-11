import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { current } from '../../store/reducers/auth.js';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../partials/Appbar';
import Sidebar from '../partials/Sidebar';

const defaultTheme = createTheme();

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
          {children}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
