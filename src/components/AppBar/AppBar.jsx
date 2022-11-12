import { Link } from 'react-router-dom';
import css from './AppBar.module.css';

const NavItemsAppBar = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        {NavItemsAppBar.map(({ href, text }) => (
          <Link to={href} key={href} className={css.nav__element}>
            {text}
          </Link>
        ))}
      </nav>
    </header>
  );
};
