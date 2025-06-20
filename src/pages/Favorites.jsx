import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";

function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
