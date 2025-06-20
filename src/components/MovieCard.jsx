import "../css/MovieCard.css";

function MovieCard({ movie, onFavorite }) {
  function onFavoriteClick() {
    onFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p><strong>Year:</strong> {movie.release_date}</p>
        <p><strong>Plot:</strong> {movie.plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;
