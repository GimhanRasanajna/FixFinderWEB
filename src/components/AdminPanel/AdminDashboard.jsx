import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AdminDash.css';

function createData(name, ID, City, Action) {
  return { name, ID, City, Action};
}

const rows = [
  createData('NSBM Center', 81, 6.0, 24),
  createData('Auto Miraj Homagama', 262, 16.0, 24),
  createData('Lakmal Service', 305, 3.7, 67),
  createData('Super One Service', 356, 16.0, 49),
  createData('GR Service Center', 356, 16.0, 49),
  createData('Ajith Auto', 356, 16.0, 49),
  createData('Auto Miraj Nugegoda', 356, 16.0, 49),
  createData('senaka Service center', 356, 16.0, 49),
  createData('Asela Auto Meerigama', 356, 16.0, 49),
  createData('Rasanjana Auto Malapalla', 356, 16.0, 49),
];

export default function AdminDashboard() {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-left">FixFinder</div>
      <div className="navbar-center">Admin Dashboard</div>
      <div className="navbar-right">
        <button>Log Out</button>
      </div>
    </nav>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service center name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.Action}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}