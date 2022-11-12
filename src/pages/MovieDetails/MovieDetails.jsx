import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'Fetch/getMovies';
import css from '../MovieDetails/MovieDetails.module.css';
import { Link } from 'react-router-dom';

const NavItemsDetails = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    backdrop_path,
    title,
    vote_average,
    release_date,
    genres,
    overview,
    original_title,
  } = movie;

  const realiseYear = release_date.split('-')[0] + ' year';
  const votePercentage = (vote_average * 10).toFixed(2) + ' %';

  const imageRoute = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <div className={css.container__details}>
      <Link to="/" className={css.backButton}>
        Go back
      </Link>
      <div className={css.container__info}>
        <img src={imageRoute} alt={original_title} className={css.poster} />
        <div className={css.container__movie}>
          {' '}
          <h1>
            {title} ({realiseYear})
          </h1>
          <p className={css.score}>User score: {votePercentage}</p>
          <p className={css.overview}>Overview:</p>
          <p className={css.overview__text}>{overview}</p>
          <p className={css.genre}>Genre:</p>
          {genres.map(item => (
            <p className={css.genre__item} key={item.name}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className={css.container__addInfo}>
        <p className={css.add__infoText}>Additional information:</p>
        <ul className={css.add__info}>
          {NavItemsDetails.map(({ href, text }) => (
            <li>
              <Link to={href} key={href} className={css.details__element}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
