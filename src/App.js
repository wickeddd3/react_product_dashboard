import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.css';
import DialogProvider from './providers/DialogProvider';
import Dialog from './components/common/Dialog';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="app">
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
          <RouterProvider router={router} />
          <Dialog />
        </SnackbarProvider>
      </DialogProvider>
    </div>
  );
}

export default App;
