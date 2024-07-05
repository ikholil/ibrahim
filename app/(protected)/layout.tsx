"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession();
  const router = useRouter()

  if (status == "loading") return null;

  if (status == "unauthenticated") router.push('/signin')
  return <div className="container h-screen">{children}</div>;
}
