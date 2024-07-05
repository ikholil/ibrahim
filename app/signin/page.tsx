"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/");
      // Redirect to the home page or any other page
    } else {
      alert("Failed to sign in");
    }
  };
const loginAsAdmin = async() => {
  setEmail('admin@gmail.com')
  setPassword('0000')
}
const loginAsUser = async() => {
  setEmail('muaz@mail.com')
  setPassword('0000')
}

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <form
        className="max-w-xl w-full rounded-md p-4 sm:p-6 shadow-2xl"
        onSubmit={handleSubmit}>
        <h2 className="text-center mb-5 text-3xl font-semibold">
          Login To Your Account
        </h2>
        <div className="flex gap-5 mb-5 justify-center">
        <button onClick={loginAsAdmin} className="py-2 cursor-pointer px-4 rounded-md bg-green-500 block">Login As Admin</button>
        <button onClick={loginAsUser} className="py-2 cursor-pointer px-4 rounded-md bg-green-500 block">Login As User</button>
        </div>
        <div>
          <label className="block my-3 text-lg" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="rahman@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-md w-full bg-transparent focus:outline-green-500"
            required
          />
        </div>
        <div>
          <label className="block my-3 text-lg" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded-md w-full bg-transparent focus:outline-green-500 block mb-5"
            required
          />
        </div>
        <button
          className="flex rounded-md py-2 px-5 justify-center bg-green-500 w-full mb-4"
          type="submit">
          Sign In
        </button>
        <p>
          Don&apos;t Have an account?{" "}
          <Link href="/signup" className="text-green-500 hover:underline">
            Create New Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
