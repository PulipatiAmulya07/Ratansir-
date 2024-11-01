import MovieCard from "./MovieCard";

function MovieGrid() {
    const movies = [
        { title: 'dada', year: 2023, director: 'sumanth' },
        { title: 'varsham', year: 2003, director: 'suman' },
        { title: 'Sankrathi', year: 2002, director: 'karthik' },
        { title: 'Godavari', year: 2010, director: 'suman' },
    ];

    return (
        <>
            <h1>Movie Grid</h1>
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    title={movie.title}
                    year={movie.year}
                    director={movie.director}
                />
            ))}
        </>
    )
}

export default MovieGrid;
