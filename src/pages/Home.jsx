import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
import { fetchMoviesBySearch, fetchMovieDetails } from "../api/omdb";

function Home({ onFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") return;

    const data = await fetchMoviesBySearch(searchQuery);
    if (data.Response === "True") {
      const detailedMovies = await Promise.all(
        data.Search.map((movie) => fetchMovieDetails(movie.imdbID))
      );
      setMovies(detailedMovies); 
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            movie={{
              title: movie.Title,
              release_date: movie.Year,
              url: movie.Poster,
              plot: movie.Plot, 
            }}
            key={movie.imdbID}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
