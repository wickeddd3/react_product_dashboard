import { useState, useMemo, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCustomer,
  resetSelectedCustomer,
  deleteCustomer,
  deleteSelectedCustomers,
} from '../store/reducers/customers';
import Container from '@mui/material/Container';
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
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { stableSort, getComparator } from '../utils/sort';
import CustomerForm from '../components/customers/CustomerForm';
import DrawerContext from '../contexts/DrawerContext';
import DialogContext from '../contexts/DialogContext';
import { useSnackbar } from 'notistack';

export default function ProductsPage() {
  const dispatch = useDispatch();

  const headCells = useSelector((state) => state.customers.headCells);
  const rows = useSelector((state) => state.customers.rows);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { setDrawer } = useContext(DrawerContext);
  const { setDialog } = useContext(DialogContext);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddCustomer = () => {
    dispatch(resetSelectedCustomer());
    setDrawer({
      show: true,
      anchor: 'right',
      component: CustomerForm,
    });
  };

  const handleEditCustomer = ({ row, event }) => {
    event.stopPropagation();
    dispatch(selectCustomer(row));
    setDrawer({
      show: true,
      anchor: 'right',
      component: CustomerForm,
    });
  };

  const handleDeleteCustomer = ({ row, event }) => {
    event.stopPropagation();
    const deleteSelectedItem = () => {
      dispatch(deleteCustomer(row));
      enqueueSnackbar('Selected customer has been permanently deleted.', { variant: 'success' });
    };
    setDialog({
      show: true,
      text: 'You are about to delete this customer permanently. Click "Confirm" if you want to proceed.',
      handler: () => deleteSelectedItem(),
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Confirm',
    });
  };

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

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableToolbar
            title="Customer"
            addButtonTitle="Add Customer"
            deleteButtonTitle="Delete selected customers"
            numSelected={selected.length}
            addItem={() => handleAddCustomer()}
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
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
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
                        {row.name}
                      </TableCell>
                      <TableCell padding="none">{row.email}</TableCell>
                      <TableCell
                        padding="none"
                        align="center"
                      >
                        {row.contact}
                      </TableCell>
                      <TableCell
                        padding="none"
                        align="center"
                      >
                        <Tooltip
                          title="Edit Customer"
                          placement="left"
                        >
                          <IconButton onClick={(event) => handleEditCustomer({ row, event })}>
                            <ModeEditOutlineOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          title="Delete Customer"
                          placement="left"
                        >
                          <IconButton onClick={(event) => handleDeleteCustomer({ row, event })}>
                            <DeleteOutlineOutlinedIcon />
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
