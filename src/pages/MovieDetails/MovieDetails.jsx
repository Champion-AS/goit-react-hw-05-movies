import { useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import s from './MovieDetails.module.css';
import BackLink from '../../components/BackLink/BackLink';
import Container from '../../components/Ul/Container/Container';
import { useMovie } from '../../context/useContext';

function MovieDetails({ state }) {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { getMovieById, searchValue } = useMovie();

  useEffect(() => {
    getMovieById(movieId);
  }, [getMovieById, movieId]);

  if (!Object.keys(searchValue).length) {
    return (
      <Container>
        <h2>Ooops, something went wrong, lets get back and try again!</h2>
        <BackLink to={backLinkHref}>Go Back</BackLink>
      </Container>
    );
  }

  const {
    title,
    name,
    overview,
    release_date,
    vote_average,
    genres,
    poster_path,
  } = searchValue;

  const movieAddress = `https://image.tmdb.org/t/p/original${poster_path}`;
  const movieScore = Math.round(vote_average * 10) + '%';
  const movieDate = new Date(release_date);
  const movieGenres = genres?.map(gen => gen.name).join(' ');

  return (
    <Container>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <section className={s.mainSection}>
        <img src={movieAddress} alt="" width={200} />
        <div className={s.secSection}>
          <p className={s.movieTitle}>
            {title || name}({movieDate.getFullYear()})
          </p>
          <p>User score: {movieScore}</p>
          <p className={s.movieOverview}>Overview</p>
          <p>{overview}</p>
          <p className={s.movieGenre}>Genres</p>
          <p>{movieGenres}</p>
        </div>
      </section>

      <section className={s.addInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default MovieDetails;



