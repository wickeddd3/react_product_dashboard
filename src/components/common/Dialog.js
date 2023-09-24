import { useContext, useRef, useEffect, useCallback } from 'react';
import DialogContext from '../../contexts/DialogContext';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialog({ children, ...rest }) {
  const { dialog, setDialog } = useContext(DialogContext);
  const { show, text, handler, cancelButtonText, confirmButtonText } = dialog;
  const buttonRef = useRef(null);

  const resetDialog = useCallback(() => {
    setDialog({ show: false, text: '', handler: null });
  }, [setDialog]);

  const handleConfirm = () => {
    handler();
    resetDialog();
  };

  const handleCancel = () => {
    resetDialog();
  };

  useEffect(() => {
    const { current } = buttonRef;
    if (current) current.focus();
  }, [show]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') resetDialog();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [resetDialog]);

  if (!show) return null;

  return (
    <div>
      <MuiDialog
        {...rest}
        open={show}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textAlign: 'center' }}
        >
          {'Are you sure?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ textAlign: 'center' }}
          >
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            ref={buttonRef}
            onClick={handleCancel}
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={handleConfirm}
            autoFocus
          >
            {confirmButtonText}
          </Button>
        </DialogActions>
      </MuiDialog>
    </div>
  );
}
