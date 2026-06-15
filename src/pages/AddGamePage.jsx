import { useState } from "react";
import FormInput from "../components/FormInput";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AddGamePage() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Wishlist");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [coverImage, setCoverImage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { user } = useAuth();
  const navigate = useNavigate();

  const searchGames = async () => {
    const response = await fetch("https://www.freetogame.com/api/games");

    const data = await response.json();

    const filteredGames = data.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSearchResults(filteredGames);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !genre) {
      alert("Please fill out required fields");
      return;
    }

    await addDoc(collection(db, "users", user.uid, "games"), {
      title,
      genre,
      status,
      rating,
      releaseYear,
      coverImage,
      description,
      createdAt: Date.now(),
    });

    alert("Game saved to Firebase!");

    navigate("/home");
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-8 text-5xl font-bold">Add New Game</h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search game..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <button
          type="button"
          onClick={searchGames}
          className="mt-2 rounded-xl bg-violet-600 px-4 py-2"
        >
          Search
        </button>
      </div>

      <div className="mt-4 mb-8 max-h-80 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900">
        {searchResults.slice(0, 10).map((game) => (
          <button
            key={game.id}
            type="button"
            className="flex w-full items-center gap-4 border-b border-slate-800 p-3 text-left hover:bg-slate-800"
            onClick={() => {
              setTitle(game.title);
              setGenre(game.genre);
              setCoverImage(game.thumbnail);

              if (game.release_date) {
                setReleaseYear(game.release_date.split("-")[0]);
              }

              setSearchResults([]);
            }}
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="h-16 w-24 rounded object-cover"
            />

            <div>
              <p className="font-semibold">{game.title}</p>
              <p className="text-sm text-slate-400">{game.genre}</p>
            </div>
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-6 rounded-2xl bg-slate-900 p-8"
      >
        <FormInput
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter game title"
        />

        <div>
          <label className="mb-2 block">Genre</label>

          <select
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          >
            <option value="">Select Genre</option>
            <option value="RPG">RPG</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
            <option value="Strategy">Strategy</option>
            <option value="Sports">Sports</option>
            <option value="Simulation">Simulation</option>
            <option value="Indie">Indie</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">Status</label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          >
            <option>Playing</option>
            <option>Completed</option>
            <option>Wishlist</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">Rating</label>

          <select
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          >
            <option value="0">Select Rating</option>
            <option value="1">⭐ 1</option>
            <option value="2">⭐ 2</option>
            <option value="3">⭐ 3</option>
            <option value="4">⭐ 4</option>
            <option value="5">⭐ 5</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">Cover Image URL</label>

          <input
            type="text"
            value={coverImage}
            onChange={(event) => setCoverImage(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
            placeholder="https://..."
          />

          {coverImage && (
            <img
              src={coverImage}
              alt={title}
              className="mt-4 h-48 rounded-xl object-cover"
            />
          )}
        </div>

        <div>
          <label className="mb-2 block">Release Year</label>

          <input
            type="number"
            value={releaseYear}
            onChange={(event) => setReleaseYear(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
            placeholder="2025"
          />
        </div>

        <div>
          <label className="mb-2 block">Description</label>

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
        >
          Save Game
        </button>
      </form>
    </section>
  );
}

export default AddGamePage;
