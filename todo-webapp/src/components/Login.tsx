import React, { useState } from "react";
import { requestLogin } from "../actions/auth";
import { useDispatch } from "react-redux";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    console.log("login requested");
    dispatch(requestLogin({ email, password }));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F6F5F8]">
      <form
        className="w-1/5 bg-white rounded-md shadow-md space-y-8 py-16"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col mb-16">
          <label className="text-4xl font-bold self-center">
            Welcome back!
          </label>
        </div>

        <div className="flex flex-col mx-8">
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="py-2 border-b border-black focus:outline-none"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col mx-8">
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="py-2 border-b border-black focus:outline-none"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col p-4 m-2">
          <button type="submit" className="p-4 bg-black text-white rounded-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
