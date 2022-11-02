import React from 'react';
import PropTypes from 'prop-types';
import s from '../MovieCast/MovieCast.module.css';

function CastItem({ props }) {
  const { profile_path, original_name, name, character } = props;
  const posterAddress = `https://image.tmdb.org/t/p/original/${profile_path}`;

  return (
    <>
      <li className={s.itemThumb}>
        {profile_path ? (
          <img
            src={posterAddress}
            alt={name || original_name}
            className={s.actorImg}
          />
        ) : (
          <div className={s.skeleton}>Image not found</div>
        )}
        <ul>
          <li>{name || original_name}</li>
          {character && <p>Character: {character}</p>}
        </ul>
      </li>
    </>
  );
}

CastItem.propTypes = {
  props: PropTypes.object.isRequired,
};

export default CastItem;