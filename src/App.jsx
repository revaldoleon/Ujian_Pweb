import { useEffect, useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieItem from "./components/MovieItem";

export default function App() {
    const [movies, setMovies] = useState([]);
    const [editingMovie, setEditingMovie] = useState(null);

    const loadMovies = async () => {
        const res = await fetch("http://localhost/api/action.php");
        const data = await res.json();
        setMovies(data);
    };

    useEffect(() => {
        loadMovies();
    }, []);

    const addMovie = async (movie) => {
        await fetch("http://localhost/api/action.php", {
            method: "POST",
            body: JSON.stringify(movie)
        });
        loadMovies();
    };

    const updateMovie = async (movie) => {
        await fetch("http://localhost/api/action.php", {
            method: "PUT",
            body: JSON.stringify(movie)
        });
        setEditingMovie(null);
        loadMovies();
    };

    const deleteMovie = async (id) => {
        await fetch("http://localhost/api/action.php", {
            method: "DELETE",
            body: JSON.stringify({ id })
        });
        loadMovies();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-400 drop-shadow-lg">
                    Movie Watchlist
                </h1>

                <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700">
                    <MovieForm
                        initialData={editingMovie}
                        onSubmit={editingMovie ? updateMovie : addMovie}
                        onCancel={() => setEditingMovie(null)}
                    />
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-300">
                    Your Movies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {movies.length === 0 ? (
                        <p className="text-gray-400 text-center col-span-2 italic">
                            No movies added yet. Add one above!
                        </p>
                    ) : (
                        movies.map((movie) => (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                onDelete={deleteMovie}
                                onEdit={(movie) => setEditingMovie(movie)}
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
