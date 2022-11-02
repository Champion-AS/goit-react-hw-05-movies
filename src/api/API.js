export const movieAPI = {
  trendingMovies: (ADDRESS = '', KEY = '') =>
    fetch(`${ADDRESS}/trending/movie/week?api_key=${KEY}`),
  searchedMovies: (ADDRESS, KEY, id, data, query, name, search) =>
    fetch(
      `${ADDRESS}${search}/movie${id}${data}?api_key=${KEY}${query}${name}`
    ),
};
