"use client";
import Loader from "@/components/shared/Loader";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, status } = useSession();

  if (status == "loading") return <Loader />;

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
