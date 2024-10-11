"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      name,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className= "flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-xs align-middle">
      <h1 className="text-blue-600 text-center mb-5 font-semibold ">Control de Usuario</h1>
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
         <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" >
        Usuario
      </label>
        <input
          type="input"
          placeholder="Nombre de usuario"
          name="name"
          className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
        <input
          type="password"
          placeholder="********"
          name="password"
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
         <p className="text-red-300 text-xs italic">Please choose a password.</p>
         </div>
         <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 ~ D@ltex 3.0 ~ All rights reserved.
  </p>

 

  {errors.length > 0 && (
    <div className="bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded mt-5">
      <ul className="mb-0 list-disc list-inside">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
    )}
    </div>
    </div>
 
);
};


export default LoginPage;
