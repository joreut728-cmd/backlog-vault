import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-violet-400"
        >
          <span className="text-3xl">🎮</span>
          <span>Backlog Vault</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Home
          </Link>

          <Link
            to="/add-game"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Add Game
          </Link>

          <Link
            to="/community"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Community
          </Link>

          <Link
            to="/login"
            className="rounded-xl bg-violet-600 px-5 py-2 font-semibold transition hover:bg-violet-500"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
