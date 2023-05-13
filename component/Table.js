import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import useSWR from 'swr';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Stack } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios'
import { useEffect } from 'react';
// import Button from '@mui/material-next/Button';

export default function rBasicTable({ }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [active, setActive] = React.useState('active')

  const [value, setValue] = React.useState();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const changebutton = () => {
    if (active == "active") {
      setActive('Inactive')
    }
    else {
      setActive('active')
    }
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/userList')
      .then((response) => response.json())
      .then((data) => setValue(data))
  }, []);

  console.log(value)
  var i =0;
  return (
    <Stack>

      <Stack >
        <TableContainer component={Paper} sx={{ borderRadius: '15px 15px 15px 15px', minWidth:{lg:'100%', sm:'70%'}, mr:{md:'4rem', sm:'4rem'}}}  >
          <Table aria-label="simple table" stickyHeader={true} >
            <TableHead>
              <TableRow>    
                <TableCell>No</TableCell>
                <TableCell align='right'><b>Student Name</b></TableCell>
                <TableCell align="right"><b>StudentID&nbsp;(email)</b></TableCell>
                <TableCell align="right"><b>Level</b></TableCell>
                <TableCell align="right"><b>Status</b></TableCell>
                <TableCell align="center"><b>Options</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value?.data.map((curElem) => {i++
                return (
                  <TableRow
                    key='row'
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="curElement">
                      {i}
                    </TableCell>
                    <TableCell align="right" sx={{fontFamily:"inherit"}}>{curElem.studentName}</TableCell>
                    <TableCell align="right" sx={{fontFamily:'inherit'}}>{curElem.studentId}</TableCell>
                    <TableCell align="right" sx={{fontFamily:"inherit"}}>{curElem.level}</TableCell>
                    <TableCell align="right" sx={{fontFamily:"inherit"}}><Button disabled={false} variant="outlined" onClick={changebutton}>{active}</Button></TableCell>
                    <TableCell align="right" sx={{fontFamily:"inherit"}}>
                      <Stack flexDirection='row'>
                        <Button href='/users/editPage'><EditIcon sx={{ color: '#430089' }} /></Button>
                        <Button onClick={changebutton}><DeleteIcon sx={{ color: '#430089' }} />
                        </Button>
                        {/* <Button color="tertiary" /> */}
                      </Stack>
                    </TableCell>

                  </TableRow>
                )

              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Stack>
  );
}
// BasicTable.getInitialProps = async ctx => {
//   try {
//     const res = await axios.get('http://localhost:3000/api/userList');
//     console.log(res.data)
//     const data = res.data;
//     return { data };
//   } catch (error) {
//     return { error };
//   }
// };
