import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session?.user.image}
          alt="user avatar"
          className="h-10 w-10 rounded-full hover:bg-gray-200 cursorp-pointer p-1"
        />
      </>
    );
  }
  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  );
};

export default User;
