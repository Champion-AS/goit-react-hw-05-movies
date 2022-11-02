import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMovie } from '../../context/useContext';
import s from './Layout.module.css';

function SharedLayout() {
  const { setSearchList } = useMovie();
  const resetArr = () => setSearchList([]);

  return (
    <>
      <header className={s.header}>
        <nav className={s.navigation}>
          <NavLink to="/" className={s.navLink}>
            <span className={s.navText}>Home</span>
          </NavLink>
          <NavLink to="/movies" className={s.navLink} onClick={resetArr}>
            <span className={s.navText}>Movies</span>
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;