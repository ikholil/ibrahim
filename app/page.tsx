"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  if (status == "loading") return <div className="h-screen flex items-center justify-center">Loading...</div>;

  if (session) {
    return (
      <div className="container h-screen">
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  
  return (
    <div className="h-screen">
    <div className="container">
      <h2 className="my-4 text-3xl font-semibold text-center">Not signed in</h2>
      <div className="flex flex-col gap-4 items-center">
        <button
          className="px-4 py-2 rounded-md bg-green-300 flex"
          onClick={() => signIn("google")}>
          Sign in with google
        </button>
        <Link
          className="px-4 py-2 rounded-md bg-green-300 inline-flex"
          href="/signup">
          Sign up with email
        </Link>
        <Link
          className="px-4 py-2 rounded-md bg-green-300 inline-flex"
          href="/signin">
          Sign in with email
        </Link>
      </div>
    </div>
    </div>
  );
}
