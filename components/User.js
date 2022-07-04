import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  if (session) {
    return <>Sign out</>;
  }
  return (
    <>
      <button onClick={signIn}>Sign in</button>
    </>
  );
};

export default User;
