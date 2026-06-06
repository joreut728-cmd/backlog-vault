import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const isLoggedIn = false;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">

  {!isLoggedIn ? (
    <>
      <Link
        to="/login"
        className="text-slate-300 hover:text-violet-400 transition"
      >
        Login
      </Link>

      <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold hover:bg-violet-500 transition">
        Register
      </button>
    </>
  ) : (
    <>
      <Link
        to="/home"
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

      <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold hover:bg-violet-500 transition">
        Logout
      </button>
    </>
  )}

</div>
      </nav>
    </header>
  );
}

export default Navbar;
