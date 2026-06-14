import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function GameCard({ game, onDelete }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-violet-500">

     
      <Link to={`/game/${game.id}`}>
        {game.coverImage && (
  <img
    src={game.coverImage}
    alt={game.title}
    className="mb-4 h-48 w-full rounded-xl object-cover"
  />
)}

        <h2 className="text-2xl font-semibold">{game.title}</h2>

        <p className="mt-2 text-slate-400">{game.genre}</p>

        <div className="mt-4">
          <StatusBadge status={game.status} />
        </div>
      </Link>

      
      <button
        onClick={() => onDelete(game.id)}
        className="mt-4 rounded bg-violet-800  px-3 py-1 text-white hover:bg-violet-400"
      >
        Delete
      </button>

    </article>
  );
}

export default GameCard;