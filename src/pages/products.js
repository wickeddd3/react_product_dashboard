import { useState, useMemo, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedCustomers } from '../store/reducers/products';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TableToolbar from '../components/common/table/TableToolbar';
import TableHeader from '../components/common/table/TableHeader';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { stableSort, getComparator } from '../utils/sort';
import { filterArrayObject } from '../utils/filter';
import DialogContext from '../contexts/DialogContext';
import { useSnackbar } from 'notistack';
import Breadcrumb from '../components/common/Breadcrumb';
import { formatPrice } from '../utils/number';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProductsPage() {
  const dispatch = useDispatch();

  const headCells = useSelector((state) => state.products.headCells);
  const rows = useSelector((state) => state.products.rows);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('product');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');

  const { setDialog } = useContext(DialogContext);

  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteSelectedCustomers = () => {
    const deleteSelectedItems = () => {
      dispatch(deleteSelectedCustomers(selected));
      setSelected([]);
      enqueueSnackbar('Selected customers has been permanently deleted.', { variant: 'success' });
    };
    setDialog({
      show: true,
      text: 'You are about to delete all selected customers permanently. Click "Confirm" if you want to proceed.',
      handler: () => deleteSelectedItems(),
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm',
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(rows);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.findIndex((item) => item?.id === row.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.findIndex((item) => item?.id === id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage]
  );

  const filteredVisibleRows = useMemo(() => filterArrayObject(visibleRows, searchInput), [visibleRows, searchInput]);

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Grid item>
              <Typography
                component="h6"
                variant="h6"
              >
                List of products
              </Typography>
            </Grid>
            <Grid item>
              <Breadcrumb />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to={'/products/new-product'}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add new product
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableToolbar
            canSearch={true}
            searchInput={searchInput}
            setSearchInput={(value) => setSearchInput(value)}
            deleteButtonTitle="Delete selected customers"
            numSelected={selected.length}
            deleteItems={() => handleDeleteSelectedCustomers()}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
              <TableHeader
                headCells={headCells}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {filteredVisibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <div style={{ display: 'flex', padding: '10px 10px' }}>
                          <img
                            srcSet={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=248&fit=crop&auto=format`}
                            alt={row.product}
                            loading="lazy"
                            style={{ width: '70px', height: '60px', borderRadius: '10px' }}
                          />
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              padding: '0 12px',
                            }}
                          >
                            <Typography
                              component="h5"
                              variant="body2"
                              style={{ fontWeight: 'bold' }}
                            >
                              {row.product}
                            </Typography>
                            <Typography
                              component="h6"
                              variant="caption"
                            >
                              {row.category}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">{formatPrice(row.price)}</TableCell>
                      <TableCell align="center">
                        <LinearProgress
                          variant="determinate"
                          value={row.stock * 1}
                        />
                      </TableCell>
                      <TableCell
                        padding="none"
                        align="center"
                      >
                        <Chip
                          label={row.publish}
                          size="small"
                        />
                      </TableCell>
                      <TableCell
                        padding="none"
                        align="center"
                      >
                        <Tooltip
                          title="Actions"
                          placement="left"
                        >
                          <IconButton>
                            <MoreVertIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 15, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
