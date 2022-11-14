// import TrendingItem from '../TrendingItem/TrendingItem';
import { Link, useLocation } from 'react-router-dom';

import css from './Trending.module.css';

export default function Trending({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.trending}>
      {movies.map(({ id, title }) => (
        <Link
          key={id}
          to={`/movies/${id}`}
          className={css.trendingItem}
          state={{ from: location }}
        >
          {title}
        </Link>
      ))}
    </ul>
  );
}
