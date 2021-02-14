import { GoogleSpreadsheet } from 'google-spreadsheet';

import mapRows from '../utils/mapRows';

import { Row } from '../types/row';

const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const { CLIENT_EMAIL, SPREADSHEET_ID } = process.env;

const initializeSheet = async () => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsById[0];

  return sheet;
};

export const getSheetTitle = async (): Promise<string> => {
  const sheet = await initializeSheet();

  return sheet.title;
};

export const getSheetRowCount = async (): Promise<number> => {
  const sheet = await initializeSheet();

  return sheet.rowCount;
};

export const getSheetRows = async (): Promise<Row[]> => {
  const sheet = await initializeSheet();
  const rows = await sheet.getRows();

  return mapRows(rows);
};

export const insertSheetRow = async (row: Row) => {
  const sheet = await initializeSheet();
  const response = await sheet.addRow(row);

  return response;
};

export const updateSheetRow = async (index: number, field: string, value: string): Promise<void> => {
  const sheet = await initializeSheet();
  const rows = await sheet.getRows();
  const row = rows[index];

  row[field] = value;
  await row.save();
};
