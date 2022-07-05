import React from "react";
import Parser from "html-react-parser";

const SearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3 ">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div
          key={result.link}
          className="flex flex-col items-center justify-center"
        >
          <div>
            <a href={result.link}>{result.formattedUrl}</a>
            <a href={result.link}>
              <h2>{result.title}</h2>
            </a>
          </div>
          <p>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
