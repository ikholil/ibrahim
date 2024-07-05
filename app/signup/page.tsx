"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/signin");
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <form className="max-w-xl w-full rounded-md p-4 sm:p-6 shadow-2xl" onSubmit={handleSubmit}>
        <h2 className="text-center mb-5 text-3xl font-semibold">Create A New Account</h2>
        <div>
          <label className="block my-3 text-lg" htmlFor="name">
            Name:
          </label>
          <input type="text" id="name" value={name} placeholder="Abdur Rahman" onChange={(e) => setName(e.target.value)} className="px-3 py-2 border rounded-md w-full bg-transparent focus:outline-primary" required />
        </div>
        <div>
          <label className="block my-3 text-lg" htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" value={email} placeholder="rahman@gmail.com" onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded-md w-full bg-transparent focus:outline-primary" required />
        </div>
        <div>
          <label className="block my-3 text-lg" htmlFor="password">
            Password:
          </label>
          <input type="password" id="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 border rounded-md w-full bg-transparent focus:outline-primary block mb-5" required />
        </div>
        <button className="flex rounded-md py-2 px-5 justify-center bg-primary w-full mb-4" type="submit">
          Sign Up
        </button>
        <p>
          Already Have an account?{" "}
          <Link href="/signin" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
