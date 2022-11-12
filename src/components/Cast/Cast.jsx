import { getMovieByCredits } from 'Fetch/getMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieByCredits(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  const castArray = cast.cast;

  return (
    <ul className={css.conteiner__cast}>
      {castArray.map(el => (
        <li key={el.original_name} className={css.cast__el}>
          {el.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
              alt={el.original_name}
            />
          )}
          {/* <img
            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
            alt={el.original_name}
          /> */}
          <p className={css.cast__name}>{el.original_name}</p>
        </li>
      ))}
    </ul>
  );
};
