import axios from 'axios';

export const getMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=7086826b195235db4a766ce943ec057f`
    )
    .then(response => response.data.results);
};

export const getMovieById = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3//movie/${movieId}?api_key=7086826b195235db4a766ce943ec057f`
    )
    .then(response => response.data);
};

export const getMovieByCredits = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3//movie/${movieId}/credits?api_key=7086826b195235db4a766ce943ec057f`
    )
    .then(response => response.data);
};

export const getMovieByReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3//movie/${movieId}/reviews?api_key=7086826b195235db4a766ce943ec057f`
    )
    .then(response => response.data.results);
};
