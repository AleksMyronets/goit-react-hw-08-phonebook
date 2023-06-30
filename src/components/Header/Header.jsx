import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { getCurrentThunk, logoutThunk } from 'redux/sliceUser';
import { setToken } from 'api';
import css from './Header.module.css';

const Header = () => {
  const { current, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !current) {
      setToken(token);
      dispatch(getCurrentThunk())
        .unwrap()
        .catch(() => dispatch(logoutThunk()));
    }
  }, [token, dispatch, current]);

  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.HeaderList}>
          {!token && (
            <li>
              <NavLink to="register" className={css.HeaderLink}>
                Register
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink to="/login" className={css.HeaderLink}>
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to="/contacts" className={css.HeaderLink}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
        {current && <Menu />}
      </nav>
    </header>
  );
};
export default Header;
