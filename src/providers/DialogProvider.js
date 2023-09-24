import { useState } from 'react';
import DialogContext from '../contexts/DialogContext';

function DialogProvider({ children, ...props }) {
  const [dialog, setDialog] = useState({
    show: false,
    text: '',
    handler: null,
    cancelButtonText: '',
    confirmButtonText: '',
  });

  return (
    <DialogContext.Provider
      value={{ dialog, setDialog }}
      {...props}
    >
      {children}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
