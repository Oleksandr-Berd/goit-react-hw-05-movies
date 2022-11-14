import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
