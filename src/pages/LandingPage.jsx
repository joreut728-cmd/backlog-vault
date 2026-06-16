import { Link } from "react-router-dom";
import { FaGamepad, FaStar, FaChartLine, FaUsers } from "react-icons/fa";

function LandingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero */}

      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Build Your Ultimate
          <span className="block text-violet-400">Gaming Library</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
          Track your backlog, rate your favorite games and organize your entire
          gaming collection in one place.
        </p>
      </div>

      {/* Features */}

      <div className="mt-32">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FaGamepad className="mb-4 text-3xl text-violet-400" />

            <h3 className="mb-3 text-xl font-semibold">
              Track Your Collection
            </h3>

            <p className="text-slate-400">
              Keep all your games organized in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FaStar className="mb-4 text-3xl text-violet-400" />

            <h3 className="mb-3 text-xl font-semibold">Rate Your Favorites</h3>

            <p className="text-slate-400">
              Save ratings and build your personal ranking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FaChartLine className="mb-4 text-3xl text-violet-400" />

            <h3 className="mb-3 text-xl font-semibold">Manage Your Backlog</h3>

            <p className="text-slate-400">
              Never lose track of the games you want to play.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FaUsers className="mb-4 text-3xl text-violet-400" />

            <h3 className="mb-3 text-xl font-semibold">Community Features</h3>

            <p className="text-slate-400">
              Planned for a future release. Players will be able to discuss
              games and share experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
