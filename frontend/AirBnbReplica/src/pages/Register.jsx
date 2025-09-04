import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-2xl">
        <p className="px-6 text-center text-3xl font-bold lg:px-10">
          Faça seu registro
        </p>
        <form className="flex flex-col gap-2">
          <input
            className="w-full rounded-full border border-gray-300 p-3 text-sm"
            type="text"
            name="text"
            id="name"
            placeholder="Digite seu nome"
          />
          <input
            className="w-full rounded-full border border-gray-300 p-3 text-sm"
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
          <input
            className="w-full rounded-full border border-gray-300 p-3 text-sm"
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <button className="bg-search cursor-pointer rounded-full border border-gray-300 p-1 text-center text-white">
            Login
          </button>
          <div className="text-center">
            <p> Já possui uma conta?</p>
            <Link to="/login">
              <span className="font-semibold underline">Logue aqui!</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
