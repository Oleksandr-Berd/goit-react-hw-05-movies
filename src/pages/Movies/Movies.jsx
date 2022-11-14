import css from './Movies.module.css';
import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFilterMovies } from 'Fetch/getMovies';
import { SearchBox } from 'components/SearchBox/SearchBox';

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!filter) {
      return;
    }
    getFilterMovies(filter).then(setMovies);
  }, [filter]);

  const handleMovieChange = value => {
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      alert('Enter some data!');
      return;
    }
    setSearchParams(query !== '' ? { filter: query } : {});
    setQuery('');
  };

  return (
    <main className={css.searchMovies}>
      {/* {!movies.length > 0 && (
        <SearchBox onChange={handleMovieChange} submit={handleSubmit} />
      )} */}
      <SearchBox
        onChange={handleMovieChange}
        submit={handleSubmit}
        value={query}
      />
      {movies.length > 0 && (
        <ul className={css.searchMovies__list}>
          {movies.map(({ id, title }) => (
            <li key={id} className={css.searchMovies__item}>
              <Link
                to={`${id}`}
                className={css.searchMovies__link}
                state={{ from: location }}
              >
                {' '}
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet></Outlet>
    </main>
  );
};
