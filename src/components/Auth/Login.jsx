import React from "react";
import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-zinc-900/80 p-8 shadow-2xl shadow-red-500/10 backdrop-blur-md">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Login to continue your journey
          </p>
        </div>

        <form action="" className="flex flex-col gap-5" onSubmit={(e)=>{
            submitHandler(e)
        }}>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300">
              Email Address
            </label>
            <input
            value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
            value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 accent-red-500"
              />
              Remember me
            </label>

            <a href="#" className="text-red-400 transition hover:text-red-300">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/30 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-medium text-red-400 hover:text-red-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;