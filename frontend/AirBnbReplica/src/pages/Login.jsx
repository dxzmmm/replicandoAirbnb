import { use, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col gap-3 rounded-2xl px-5">
        <p className="text-center text-3xl font-bold lg:px-13">
          Faça seu login
        </p>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-full border border-gray-300 p-3 text-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 p-3 text-sm"
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-search cursor-pointer rounded-full border border-gray-300 p-1 text-center text-white">
            Login
          </button>
        </form>
        <div className="text-center">
          <p> Já possui uma conta?</p>
          <Link to="/register">
            <span className="font-semibold underline">Registre-se aqui!</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
