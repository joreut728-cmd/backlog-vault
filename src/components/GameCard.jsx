import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`}>
      <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-violet-500">
        
        <div className="mb-4 h-48 rounded-xl bg-slate-800"></div>

        <h2 className="text-2xl font-semibold">
          {game.title}
        </h2>

        <p className="mt-2 text-slate-400">
          {game.genre}
        </p>

        <span className="mt-4 inline-block rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
          {game.status}
        </span>
      </article>
    </Link>
  );
}

export default GameCard;