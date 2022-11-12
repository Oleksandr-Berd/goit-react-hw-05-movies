import { getMovieByReviews } from 'Fetch/getMovies';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Reviews/Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getMovieByReviews(movieId).then(setReview);
  }, [movieId]);

  console.log(review);

  if (!review) {
    return (
      <p className={css.noReview}>We don't have any reviews for this movie!</p>
    );
  }

  return (
    <ul className={css.conteiner__cast}>
      {review.map(({ id, author, content }) => (
        <li key={id} className={css.reviews__el}>
          <h1 className={css.reviews__name}>{author}</h1>
          <p className={css.reviews__content}>{content}</p>
        </li>
      ))}
    </ul>
  );
};
