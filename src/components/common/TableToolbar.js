import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { alpha } from '@mui/material/styles';

export default function TableToolbar(props) {
  const { numSelected, title, addButtonTitle, addItem, deleteItems, deleteButtonTitle } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip
          title={deleteButtonTitle}
          placement="left"
        >
          <IconButton onClick={deleteItems}>
            <DeleteSweepOutlinedIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={addButtonTitle}>
          <IconButton onClick={addItem}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};
