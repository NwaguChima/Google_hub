import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <picture>
              <source
                srcSet="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
                type="image/webp"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Name.svg"
                alt="provider logo"
              />
            </picture>
            <p>Created for learning purposes</p>
            <button
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
