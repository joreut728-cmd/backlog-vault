import GameCard from "../components/GameCard";



function HomePage() {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      genre: "RPG",
      status: "Playing",
      rating: 5,
      description: "..."
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "Soulslike",
      status: "Completed",
      rating: 5,
      description: "..."
    },
    {
      id: 3,
      title: "Hollow Knight",
      genre: "Metroidvania",
      status: "Wishlist",
      rating: 5,
      description: "..."
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
          <GameCard key={game.id} game={game} />
        ))}

      </div>
      
    </section>
  );
}

export default HomePage;



  