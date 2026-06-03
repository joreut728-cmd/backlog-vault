import GameCard from "../components/GameCard";
import { games } from "../data/games";
import Button from "../components/Button";

function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero Section */}

      <div className="mb-24 text-center">
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          🎮 Your Personal Gaming Library
        </span>

        <h1 className="mt-8 text-6xl font-bold leading-tight">
          Build Your Ultimate
          <span className="block text-violet-400">Gaming Library</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
          Track your backlog, rate your favorite games, discover new titles and
          connect with a growing gaming community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button variant="primary">Add Game</Button>

          <Button variant="secondary">Explore Collection</Button>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Your Game Collection</h2>

        <p className="mt-3 text-slate-400">
          Manage your backlog and track your gaming journey.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Everything You Need</h2>

          <p className="mt-3 text-slate-400">
            Powerful tools to manage and share your gaming journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <h3 className="mb-3 text-xl font-semibold">📚 Manage Collection</h3>

            <p className="text-slate-400">
              Build and manage your personal gaming library.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <h3 className="mb-3 text-xl font-semibold">⭐ Rate Games</h3>

            <p className="text-slate-400">
              Rate games and keep track of your top picks.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <h3 className="mb-3 text-xl font-semibold">🎯 Track Progress</h3>

            <p className="text-slate-400">
              Monitor your gaming progress and backlog.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">
            <h3 className="mb-3 text-xl font-semibold">💬 Community</h3>

            <p className="text-slate-400">
              Join discussions and share experiences with other gamers.
            </p>
          </div>
        </div>
      </div>

      {/* GameCard Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
