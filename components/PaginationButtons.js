import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CheveronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="text-blue-700">
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
          dangerouslySetInnerHTML
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
