import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";

const search = () => {
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
