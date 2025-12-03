export default function MovieItem({ movie, onDelete, onEdit }) {
    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md text-white flex gap-4">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-20 h-28 object-cover rounded"
            />

            <div className="flex-1">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p>{movie.year}</p>
                <p className="text-sm text-gray-400">{movie.genre}</p>

                <div className="mt-3 flex gap-2">
                    <button
                        className="bg-yellow-500 px-3 py-1 rounded"
                        onClick={() => onEdit(movie)}
                    >
                        Edit
                    </button>

                    <button
                        className="bg-red-600 px-3 py-1 rounded"
                        onClick={() => onDelete(movie.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
