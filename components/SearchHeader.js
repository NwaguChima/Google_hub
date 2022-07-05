import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
          width={120}
          height={40}
          objectFit="contain"
          alt="Google Hub Logo"
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none "
          />
          <XIcon className="h-7 text-gray-500 cursor-pointer sm:mr-3" />
          <MicrophoneIcon className="h-6 sm: inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 sm: inline-flex text-blue-500" />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
};

export default SearchHeader;
