// import TrendingItem from '../TrendingItem/TrendingItem';
import { Link } from 'react-router-dom';

import css from './Trending.module.css';

export default function Trending({ movies }) {
  return (
    <ul className={css.trending}>
      {movies.map(({ id, backdrop_path, title, poster_path }) => (
        <Link key={id} to={`movies/${id}`} className={css.trendingItem}>
          {title}
        </Link>
      ))}
    </ul>
  );
}
