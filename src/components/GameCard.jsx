
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`}>
      <article>
        <h2>{game.title}</h2>

        <p>{game.genre}</p>

        <StatusBadge status={game.status} />
      </article>
    </Link>
  );
}

export default GameCard;