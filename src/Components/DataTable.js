import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomizedMenus from './DropdownMenu';
import Action from './Action';

const columns = [
  { id: 'icon', label: '', minWidth: 170 },

  { id: 'Date', label: 'Date', minWidth: 170 },
  { id: 'Event', label: 'Event', minWidth: 100 },
  {
    id: 'Track',
    label: 'Track Name',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'OnSaleDate',
    label: 'On Sale Date',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'Action',
  label: 'Action'},
];

function createData(icon, Date, Event, Track, OnSaleDate, Action) {
  const Status = Track / OnSaleDate;
  return {icon, Date, Event, Track, OnSaleDate, Status, Action };
}



const rows = [
  createData(<CustomizedMenus/>,'India', 'IN', 1324171354, 3287263, <Action/>),
  createData(<CustomizedMenus/>,'China', 'CN', 1403500365, 9596961),
  createData(<CustomizedMenus/>,'Italy', 'IT', 60483973, 301340),
  createData(<CustomizedMenus/>,'United States', 'US', 327167434, 9833520),
  createData(<CustomizedMenus/>,'Canada', 'CA', 37602103, 9984670),
  createData(<CustomizedMenus/>,'Australia', 'AU', 25475400, 7692024),
  createData(<CustomizedMenus/>,'Germany', 'DE', 83019200, 357578),
  createData(<CustomizedMenus/>,'Ireland', 'IE', 4857000, 70273),
  createData(<CustomizedMenus/>,'Mexico', 'MX', 126577691, 1972550),
  createData(<CustomizedMenus/>,'Japan', 'JP', 126317000, 377973),
  createData(<CustomizedMenus/>,'France', 'FR', 67022000, 640679),
  createData(<CustomizedMenus/>,'United Kingdom', 'GB', 67545757, 242495),
  createData(<CustomizedMenus/>,'Russia', 'RU', 146793744, 17098246),
  createData(<CustomizedMenus/>,'Nigeria', 'NG', 200962417, 923768),
  createData(<CustomizedMenus/>,'Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderStyle: "none"}}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                sx={{padding: "5%", fontWeight: "bold"}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{padding: "5%"}} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
