const API_KEY = "4e309f43";
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMoviesBySearch(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data;
}

export async function fetchMovieDetails(imdbID) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
  const data = await response.json();
  return data;
}
