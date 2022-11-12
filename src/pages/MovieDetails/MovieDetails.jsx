import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
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

  //   getMovieById(movieId).then(console.log);

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

  const imageRoute = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  console.log(movie);
  return (
    <div className={css.container__details}>
      <div className={css.container__info}>
        <img src={imageRoute} alt={original_title} className={css.poster} />
        <div className={css.container__movie}>
          {' '}
          <h1>{title}</h1>
          <p>({release_date})</p>
          <p className={css.score}>User score: {vote_average}</p>
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
      <p className={css.add__infoText}>Additional information:</p>
      <ul className={css.add__info}>
        {NavItemsDetails.map(({ href, text }) => (
          <Link to={href} key={href} className={css.details__element}>
            {text}
          </Link>
        ))}
      </ul>
    </div>
  );
};
