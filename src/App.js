import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.css';
import DialogProvider from './providers/DialogProvider';
import Dialog from './components/common/Dialog';

function App() {
  return (
    <div className="app">
      <DialogProvider>
        <RouterProvider router={router} />
        <Dialog />
      </DialogProvider>
    </div>
  );
}

export default App;
