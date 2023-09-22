import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function InputError({ message }) {
  return (
    <motion.div
      style={{
        display: 'flex',
        margin: 0,
        marginTop: '16px',
      }}
      {...framerError}
    >
      <ErrorOutlineOutlinedIcon
        fontSize="small"
        color="error"
        sx={{ fontSize: '1.1rem' }}
      />
      <Typography
        variant="caption"
        component="p"
        color="error"
        sx={{ px: 1 }}
      >
        {message}
      </Typography>
    </motion.div>
  );
}

const framerError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
