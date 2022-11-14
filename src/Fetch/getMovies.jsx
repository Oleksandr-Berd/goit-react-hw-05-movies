import axios from 'axios';
import { KEY } from './key';
import { URL } from './Url';

export const getTrendingMovies = () => {
  return axios
    .get(`${URL}trending/movie/week?api_key=${KEY}`)
    .then(response => response.data.results);
};

export const getMovieById = movieId => {
  return axios
    .get(`${URL}/movie/${movieId}?api_key=${KEY}`)
    .then(response => response.data);
};

export const getMovieByCredits = movieId => {
  return axios
    .get(`${URL}/movie/${movieId}/credits?api_key=${KEY}`)
    .then(response => response.data);
};

export const getMovieByReviews = movieId => {
  return axios
    .get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}`)
    .then(response => response.data.results);
};

export const getFilterMovies = filter => {
  return axios
    .get(`${URL}search/movie?api_key=${KEY}&query=${filter}`)
    .then(response => response.data.results);
};
