import { Outlet } from 'react-router-dom';
import { getMovies } from 'Fetch/getMovies';
import { useState, useEffect } from 'react';
import Trending from 'components/Trending/Trending';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <>
      <Trending movies={movies} />
      <Outlet />
    </>
  );
};
