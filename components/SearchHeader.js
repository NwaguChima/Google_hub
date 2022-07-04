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
      <div className="">
        <Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
          width={120}
          height={40}
          objectFit="contain"
          alt="Google Hub Logo"
          className="cursor-pointer"
        />
        <form>
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className=""
          />
          <XIcon className="h-7" />
          <MicrophoneIcon className="h-6" />
          <SearchIcon className="h-6" />
        </form>
        <User />
      </div>
    </header>
  );
};

export default SearchHeader;
