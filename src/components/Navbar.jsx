import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-violet-400">
          Backlog Vault
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
            to="/add-game"
            className="text-slate-300 hover:text-violet-400 transition"
          >
            Community
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-violet-500 px-4 py-2 font-medium hover:bg-violet-600 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
