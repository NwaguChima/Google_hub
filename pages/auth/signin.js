import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center p-5">
            <picture>
              <source
                srcSet="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
                type="image/webp"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
                alt="provider logo"
                className="w-55 object-cover"
              />
            </picture>
            <p className="text-sm italic my-10 text-center">
              Created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "/",
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signin;
