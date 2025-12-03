import MovieItem from "./MovieItem";

export default function MovieList({ movies, onEdit, onDelete }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}