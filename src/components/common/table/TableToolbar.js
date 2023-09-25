import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { alpha } from '@mui/material/styles';
import TableSearch from '../table/TableSearch';

export default function TableToolbar(props) {
  const {
    numSelected,
    canSearch,
    addButtonTitle,
    addItem,
    deleteItems,
    deleteButtonTitle,
    searchInput,
    setSearchInput,
  } = props;

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
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
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
            canSearch && (
              <TableSearch
                value={searchInput}
                setValue={setSearchInput}
              />
            )
          )}
        </Grid>
        <Grid item>
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
            <Tooltip
              title={addButtonTitle}
              placement="left"
            >
              <IconButton onClick={addItem}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  canSearch: PropTypes.bool.isRequired,
  addButtonTitle: PropTypes.string.isRequired,
  deleteButtonTitle: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItems: PropTypes.func.isRequired,
};
