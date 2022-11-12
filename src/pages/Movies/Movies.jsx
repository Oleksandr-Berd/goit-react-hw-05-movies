import css from './Movies.module.css';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div className={css.movies}>
      <Outlet></Outlet>
    </div>
  );
};
