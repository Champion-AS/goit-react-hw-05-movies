import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './MovieReviews.module.css'
import { useMovie } from '../../context/useContext'

function Reviews(props) {
  const { searchList, getMovieReviews } = useMovie();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId));
  }, [getMovieReviews, movieId]);

  if (!searchList.length) {
    return <p>We don't have any reviews on this movie! :(</p>;
  }

  return (
    <section>
      <ul>
        {searchList.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p className={s.author}>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Reviews;