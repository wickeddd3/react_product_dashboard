import Router from './router';
import './App.css';
import DrawerProvider from './providers/DrawerProvider';
import Drawer from './components/common/drawer/Drawer';
import DialogProvider from './providers/DialogProvider';
import Dialog from './components/common/Dialog';
import { AuthProvider } from './providers/AuthProvider';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <DrawerProvider>
          <DialogProvider>
            <SnackbarProvider
              maxSnack={5}
              autoHideDuration={3000}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              dense
            >
              <Router />
              <Drawer />
              <Dialog />
            </SnackbarProvider>
          </DialogProvider>
        </DrawerProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
