import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../context/useContext';
import CastItem from '../Castltem/Castltem';
import s from './MovieCast.module.css';

function Cast(props) {
  const { searchList, getMovieCast } = useMovie();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId));
  }, [getMovieCast, movieId]);

  if (!searchList.length) {
    return;
  }

  return (
    <ul className={s.castSection}>
      {searchList.map(searchItem => {
        return <CastItem key={searchItem.cast_id} props={searchItem} />;
      })}
    </ul>
  );
}

export default Cast;