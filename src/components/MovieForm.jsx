import { useState, useEffect } from "react";

export default function MovieForm({ initialData, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        title: "",
        year: "",
        genre: "",
        poster: ""
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                title: initialData.title,
                year: initialData.year,
                genre: initialData.genre,
                poster: initialData.poster
            });
        } else {
            setForm({
                title: "",
                year: "",
                genre: "",
                poster: ""
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();

        onSubmit({
            ...initialData,
            ...form
        });
    };

    return (
        <form onSubmit={submit} className="bg-gray-800 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-3 text-white">
                {initialData ? "Edit Movie" : "Add New Movie"}
            </h2>

            <input type="text" name="title" placeholder="Title"
                className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
                value={form.title} onChange={handleChange} required />

            <input type="number" name="year" placeholder="Year"
                className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
                value={form.year} onChange={handleChange} required />

            <input type="text" name="genre" placeholder="Genre"
                className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
                value={form.genre} onChange={handleChange} required />

            <input type="text" name="poster" placeholder="Poster URL"
                className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
                value={form.poster} onChange={handleChange} required />

            <button type="submit"
                className="w-full bg-blue-600 py-2 rounded-lg font-semibold mt-2">
                {initialData ? "Update Movie" : "Add Movie"}
            </button>

            {initialData && (
                <button
                    type="button"
                    className="w-full bg-gray-500 py-2 rounded-lg font-semibold mt-2"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            )}
        </form>
    );
}
