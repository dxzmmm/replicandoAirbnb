import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl">
        <p className="text-center text-3xl font-bold">Faça seu login</p>
        <input
          className="w-full rounded-full border border-gray-300 p-3 text-sm"
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
        />
        <input
          className="w-full rounded-full border border-gray-300 p-3 text-sm"
          type="text"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
        <button className="bg-search cursor-pointer rounded-full border border-gray-300 p-1 text-center text-white">
          Login
        </button>
        <Link to="/register">
          Ainda não tem uma conta?{" "}
          <span className="font-semibold underline">Registre-se aqui!</span>
        </Link>
      </div>
    </section>
  );
};

export default Login;
