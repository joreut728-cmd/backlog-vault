import { useState } from "react";

function AddGamePage() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Wishlist");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      title,
      genre,
      status,
      description,
    });
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">

      <h1 className="mb-8 text-5xl font-bold">
        Add New Game
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-slate-900 p-8"
      >

        <div>
          <label className="mb-2 block">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Genre
          </label>

          <input
            type="text"
            value={genre}
            onChange={(event) =>
              setGenre(event.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">
            Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3"
          >
            <option>Playing</option>
            <option>Completed</option>
            <option>Wishlist</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">
            Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
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