import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">

      {/* Hero */}

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Build Your Ultimate
          <span className="block text-violet-400">
            Gaming Library
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
          Track your backlog, rate your favorite games and
          organize your entire gaming collection in one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/login"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
          >
            Login
          </Link>

          <Link
          to="/register"
            className="rounded-xl border border-slate-700 px-6 py-3 hover:border-violet-500"
          >
            Register
          </Link>

        </div>

      </div>

      {/* Features */}

      <div className="mt-32">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Track Your Collection
            </h3>

            <p className="text-slate-400">
              Keep all your games organized in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Rate Your Favorites
            </h3>

            <p className="text-slate-400">
              Save ratings and build your personal ranking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Manage Your Backlog
            </h3>

            <p className="text-slate-400">
              Never lose track of the games you want to play.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default LandingPage;