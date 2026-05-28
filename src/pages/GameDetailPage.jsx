import { Link, useParams } from "react-router-dom";

function GameDetailPage() {
  const { id } = useParams();

  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      genre: "RPG",
      status: "Playing",
      rating: 5,
      description:
        "An open-world action RPG set in Night City.",
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "Soulslike",
      status: "Completed",
      rating: 5,
      description:
        "A dark fantasy action RPG created by FromSoftware.",
    },
    {
      id: 3,
      title: "Hollow Knight",
      genre: "Metroidvania",
      status: "Wishlist",
      rating: 4,
      description:
        "A beautiful metroidvania adventure in a mysterious world.",
    },
  ];

  const game = games.find((game) => game.id === Number(id));

  if (!game) {
    return (
      <div className="p-10 text-2xl">
        Game not found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">

      <Link
        to="/"
        className="mb-8 inline-block text-violet-400 hover:text-violet-300"
      >
        ← Back
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

        <div className="h-80 bg-slate-800"></div>

        <div className="p-8">

          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold">
              {game.title}
            </h1>

            <span className="rounded-full bg-violet-500/20 px-4 py-2 text-violet-300">
              {game.status}
            </span>
          </div>

          <p className="mt-4 text-slate-400">
            {game.genre}
          </p>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            {game.description}
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">
              Rating
            </h2>

            <p className="mt-2 text-violet-400 text-xl">
              ⭐ {game.rating}/5
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GameDetailPage;