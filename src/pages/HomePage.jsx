import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

import { db } from "../data/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [games, setGames] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const deleteGame = async (gameId) => {
    try {
      await deleteDoc(doc(db, "users", user.uid, "games", gameId));
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  useEffect(() => {
    if (!user) return;

    const ref = collection(db, "users", user.uid, "games");

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      setGames(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      );
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero Section */}
      <div className="mb-12 border-b border-slate-800 pb-6">
        <span className="text-sm uppercase tracking-widest text-white-400">
          Dashboard
        </span>

        <h1 className="mt-2 text-5xl font-bold tracking-tight  text-violet-400">
          Your Game Collection
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Manage your backlog, track your progress and organize your favorite
          games.
        </p>
      </div>

      {/* GameCard Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onDelete={deleteGame} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
