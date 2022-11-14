import { Outlet } from 'react-router-dom';
import { getTrendingMovies } from 'Fetch/getMovies';
import { useState, useEffect } from 'react';
import Trending from 'components/Trending/Trending';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <Trending movies={movies} />
      <Outlet />
    </>
  );
};
