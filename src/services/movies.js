// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=b7d4916d0799dfce932437fe9f242f2c&language=en-US&query=matrix&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch
const API_KEY = "b7d4916d0799dfce932437fe9f242f2c";

export const MoviesService = {
  async SearchMovies(title) {
    const query = new URLSearchParams({
      api_key: API_KEY,
      query: title,
    }).toString();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?${query}`
      );
      if (!response.ok) {
        throw new Error("Error fetching movies");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  },
};
