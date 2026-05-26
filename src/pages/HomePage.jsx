function HomePage() {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      genre: "RPG",
      status: "Playing",
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "Soulslike",
      status: "Completed",
    },
    {
      id: 3,
      title: "Hollow Knight",
      genre: "Metroidvania",
      status: "Wishlist",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Your Game Collection
        </h1>

        <p className="mt-3 text-slate-400">
          Manage your backlog and track your gaming journey.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-violet-500"
          >
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;