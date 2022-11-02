import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../.././components/Ul/Container/Container';
import s from './Home.module.css';
import {useMovie} from '../../context/useContext'

function Home() {
  const { trend, getTrendingMovies } = useMovie();

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  const onReload = () => {
    window.location.reload();
  };

  if (!trend.length) {
    return (
      <Container>
        <h2>Something went wrong, try to refresh the page!</h2>
        <button onClick={onReload}>Refresh Page</button>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Trending today</h2>

      <ul className={s.list}>
        {trend.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title || name}</Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Home;