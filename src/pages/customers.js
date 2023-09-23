import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomer, resetSelectedCustomer } from '../store/reducers/customers';
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
import TableToolbar from '../components/common/TableToolbar';
import TableHeader from '../components/common/TableHeader';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { stableSort, getComparator } from '../utils/sort';
import Drawer from '../components/common/Drawer';
import CustomerForm from '../components/customers/CustomerForm';

export default function ProductsPage() {
  const headCells = useSelector((state) => state.customers.headCells);
  const rows = useSelector((state) => state.customers.rows);
  const dispatch = useDispatch();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [drawerComponent, setDrawerComponent] = useState(() => null);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleAddCustomer = () => {
    dispatch(resetSelectedCustomer());
    setDrawerComponent(() => CustomerForm);
    setShowDrawer(true);
  };

  const handleEditCustomer = ({ row, event }) => {
    event.stopPropagation();
    dispatch(selectCustomer(row));
    setDrawerComponent(() => CustomerForm);
    setShowDrawer(true);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

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
            numSelected={selected.length}
            addItem={() => handleAddCustomer()}
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
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
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

      <Drawer
        show={showDrawer}
        component={drawerComponent}
        closeDrawer={() => setShowDrawer(false)}
      />
    </Container>
  );
}
