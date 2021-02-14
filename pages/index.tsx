import React from "react";

import { GetServerSideProps } from "next";

import Layout from "../components/Layout";
import Home from "../views/home";

import { getSheetRows } from "../lib/api";
import { Row } from "../types/row";
import TableSection from "../views/home/TableSection";

interface IHomePageProps {
  rows: Row[];
}

const HomePage: React.FC<IHomePageProps> = ({ rows }) => (
  <Layout>
    <Home />
    <TableSection rows={rows} />
  </Layout>
);

export default HomePage;


export const getServerSideProps: GetServerSideProps = async () => {
  const allRows = await getSheetRows();

  return { props: { rows: allRows } };
};