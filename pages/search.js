import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

const search = ({ results }) => {
  console.log("results", results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Seach Header */}
      <SearchHeader />

      {/* Search Result */}
    </div>
  );
};

export default search;

export async function getServerSideProps(context) {
  const mockData = true;

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
