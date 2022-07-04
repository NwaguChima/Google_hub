import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
          width={300}
          height={100}
          alt="Google Hub Logo"
        />
        <div className="">
          <SearchIcon className="h-5" />
          <input type="text" />
          <MicrophoneIcon className="h-5" />
        </div>
        <button>Google Search</button>
        <button>I&apos;m Feeling Lucky</button>
      </form>

      {/* Footer */}
    </div>
  );
}
