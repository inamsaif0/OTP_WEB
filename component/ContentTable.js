import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import fetch from 'isomorphic-unfetch';
const columns = [
  { id: 'no', label: 'No', minWidth: 170 },
  { id: 'filename', label: 'FileName', minWidth: 100 },
  {
    id: 'filetype',
    label: 'FileType',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'student',
    label: 'Student',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'teacher',
    label: 'Teacher',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'level',
    label: 'Level',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },  
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },     
];

function createData(no, filename,filetype, student, teacher, level, date) {

  return { no, filename,filetype, student, teacher, level, date };
}

const rows = [
  createData('1', 'IN', 1324171354, 3287263,'inam','inter1','12/12/23'),
  createData('2', 'CN', 1403500365, 9596961,'najam','inter1','12/12/23'),
  createData('3', 'IT', 60483973, 301340,'inam', 'inter1','12/12/23'),
  createData('4', 'US', 327167434, 9833520,'hassam', 'inter1','12/12/23'),
  createData('5', 'CA', 37602103, 9984670,'shahrukh','inter1','12/12/23'),
  createData('6', 'AU', 25475400, 7692024,'shahrukh', 'inter1','12/12/23'),
  createData('7', 'DE', 83019200, 357578, 'shahrukh','inter1','12/12/23'),
  createData('8', 'IE', 4857000, 70273, 'shahrukh','inter1','12/12/23'),
  createData('9', 'MX', 126577691, 1972550,'shahrukh','inter1','12/12/23'),
  createData('10', 'JP', 126317000, 377973,'shahrukh','inter1','12/12/23'),
  createData('11', 'FR', 67022000, 640679, 'shahrukh','inter1','12/12/23'),
  createData('12', 'GB', 67545757, 242495, 'shahrukh','inter1','12/12/23'),
  createData('13', 'RU', 146793744, 17098246, 'shahrukh','inter1','12/12/23'),
  createData('14', 'NG', 200962417, 923768, 'shahrukh','inter1','12/12/23'),
  createData('15', 'BR', 210147125, 8515767, 'sharukjh','inter2','12/12/23'),
];

export default function StickyHeadTable({content}) {
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
    
    <Paper sx={{direction:'flex' , width: '80%', overflow: 'hidden', ml:'5rem', flexGrow:2 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
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
                        <TableCell key={column.id} align={column.align}>
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

StickyHeadTable.getInitialProps = async () => {
 const res = await fetch('http://localhost:3000/api/content');
 const { data } = await res.json();
 console.log(data);
 return {content: data}

}
