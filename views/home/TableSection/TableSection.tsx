import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Row } from '../../../types/row';

import styles from './TableSection.module.scss';

interface TableSectionProps {
  rows: Row[];
}

const TableSection: React.FC<TableSectionProps> = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table className={styles.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Code</TableCell>
          <TableCell align="right">Product name</TableCell>
          <TableCell align="right">Direct sale</TableCell>
          <TableCell align="right">Indirect sale</TableCell>
          <TableCell align="right">Points</TableCell>
          <TableCell align="right">Used points</TableCell>
          <TableCell align="right">Remaing points</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: Row) => (
          <TableRow key={row.code}>
            <TableCell component="th" scope="row">{row.code}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.direct}</TableCell>
            <TableCell align="right">{row.indirect}</TableCell>
            <TableCell align="right">{row.points}</TableCell>
            <TableCell align="right">{row.usedPoints}</TableCell>
            <TableCell align="right">{row.remaingPoints}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableSection;
