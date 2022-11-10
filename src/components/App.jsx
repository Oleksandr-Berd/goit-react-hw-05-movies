import { Route, Routes } from 'react-router-dom';
import styled from '../components/App.module.css';
import { Home } from './Home/Home';
import { Movies } from '../components/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movie</div>} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route> */}
      </Routes>
    </div>
  );
};
