import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

function ActionButtons(props) {
  const { buttonText, hasActionButtons, submit } = props;

  if (!hasActionButtons) return null;

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={submit}
    >
      {buttonText}
    </Button>
  );
}

export default function DrawerContent(props) {
  const { children, title, close } = props;
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: '12px',
              width: '100%',
            }}
          >
            <Typography
              component="h6"
              variant="button"
              sx={{
                fontWeight: 'bold',
              }}
            >
              {title}
            </Typography>
            <Tooltip title="Close Drawer">
              <IconButton onClick={close}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {children}
        </Box>
        {ActionButtons(props)}
      </Box>
    </Container>
  );
}
