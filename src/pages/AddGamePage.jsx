import { useState } from "react";
import FormInput from "../components/FormInput";

function AddGamePage() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Wishlist");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [coverImage, setCoverImage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !genre) {
      alert("Please fill out all required fields.");
      return;
    }

    const newGame = {
      id: Date.now(),
      title,
      genre,
      status,
      rating,
      releaseYear,
      coverImage,
      description,
    };

    const existingGames = JSON.parse(localStorage.getItem("games")) || [];

    existingGames.push(newGame);

    localStorage.setItem("games", JSON.stringify(existingGames));

    console.log(existingGames);
    alert("Game successfully added");
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-8 text-5xl font-bold">Add New Game</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-slate-900 p-8"
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
            <option value="2">⭐ ⭐ 2</option>
            <option value="3">⭐ ⭐ ⭐ 3</option>
            <option value="4">⭐ ⭐ ⭐ ⭐ 4</option>
            <option value="5">⭐ ⭐ ⭐ ⭐ ⭐ 5</option>
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
