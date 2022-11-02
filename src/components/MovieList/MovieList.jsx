import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieList({ data }) {
  const location = useLocation();

  return (
    <ul>
      {data.map(trend => {
        const { id, title, name } = trend;
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MovieList.propTypes = { data: PropTypes.array.isRequired };

export default MovieList;