import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await login(email, password);

      navigate("/home");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section className="mx-auto flex min-h-[80vh] max-w-md items-center px-6">
      <div className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="mb-2 text-4xl font-bold">Welcome Back</h1>

        <p className="mb-8 text-slate-400">
          Login to access your gaming library.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block">Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block">Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
