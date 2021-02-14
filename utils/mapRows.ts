import { Row } from '../types/row';

export const mapRow = (row): Row => ({
  code: row.code,
  name: row.name,
  direct: row.direct,
  indirect: row.indirect,
  points: row.points,
  usedPoints: row.usedPoints,
  remaingPoints: row.remaingPoints,
});

const mapRows = (rows): Row[] =>
  rows.map(row => ({
    code: row.code,
    name: row.name,
    direct: row.direct,
    indirect: row.indirect,
    points: row.points,
    usedPoints: row.usedPoints,
    remaingPoints: row.remaingPoints,
  }));

export default mapRows;
