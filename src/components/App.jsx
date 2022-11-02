import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './Layout/Layout';
import Home from '../pages/Home/Home';

const MovieSearch = lazy(() => import('../pages/MovieSearchPage/MovieSearchPage'))
const Cast = lazy(() => import('./MovieCast/MovieCast'));
const Reviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path=":movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
