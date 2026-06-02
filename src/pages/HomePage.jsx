import GameCard from "../components/GameCard";
import { games } from "../data/games";

function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <h1 className="text-6xl font-bold">🎮 Backlog Vault</h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
          Organize your gaming journey, track your backlog, rate your favorite
          games and connect with the community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">
            Add Game
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-violet-500">
            Browse Collection
          </button>
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
        <h2 className="mb-10 text-center text-4xl font-bold">Features</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">📚 Manage Collection</h3>

            <p className="text-slate-400">
              Organize all your games in one place.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">⭐ Rate Games</h3>

            <p className="text-slate-400">Track your personal favorites.</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">🎯 Track Progress</h3>

            <p className="text-slate-400">
              Keep track of what you are playing.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">💬 Community</h3>

            <p className="text-slate-400">Discuss games with other players.</p>
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
