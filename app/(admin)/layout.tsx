"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, status, update } = useSession();
  console.log(data?.user);
  if (status == "loading") return "loading";

  if (status == "unauthenticated") return <p>Access Denied</p>;
  if (data?.user.role != "admin")
    return (
      <div>
        <p>You Are not authorized</p>
        <Link href="/">Back to home</Link>
      </div>
    );
  return <div>{children}</div>;
}
