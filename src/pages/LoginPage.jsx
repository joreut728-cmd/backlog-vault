import { useState } from "react";

function LoginPage() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      title,
      genre,
    });
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-8 text-5xl font-bold">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-slate-900 p-8"
      >
        <div>
          <label className="mb-2 block">Email</label>

          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Passwort</label>

          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl cursor-pointer bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
