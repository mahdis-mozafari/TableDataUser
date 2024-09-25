
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getPosts } from '@/_actions/postAction';



export default async function BasicTable() {

  //‍! To comment on lines 17 and 19 to 21 and 35 to 47, please read the readme of the file.
  // const {data, errMsg} =await getPosts()

  // if(errMsg){
  //   return <h1>{errMsg}</h1>
  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date of birth</TableCell>
            <TableCell align="right">Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.phoneNumber}</TableCell>
              <TableCell align="right">{row.dateOfBirth}</TableCell> 
              
             </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

