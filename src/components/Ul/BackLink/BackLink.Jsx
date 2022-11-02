import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import s from './BackLink.module.css';
import PropTypes from 'prop-types';

function BackLink({ to, children }) {
  return (
    <Link to={to}>
      <button className={s.button}>
        <FaArrowLeft className={s.arrow} />
        {children}
      </button>
    </Link>
  );
}

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};

export default BackLink;
