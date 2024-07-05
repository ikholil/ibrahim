"use client";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, status, update } = useSession();
  console.log(data, update);
  if (status == "loading") return null;

  if (status == "unauthenticated") return <p>Access Denied</p>;
  return <div className="container h-screen">{children}</div>;
}
