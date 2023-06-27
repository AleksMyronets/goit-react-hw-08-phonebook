import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from 'redux/sliceUser';
import css from './Menu.module.css';

export const Menu = () => {
    const dispatch = useDispatch;
    const email = useSelector(state => state.auth.carrent.email);

    return (
        <div>
            <p className={css.Email}>{email}</p>
            <button
                className={css.MenuButton}
                onClick={() => dispatch(logoutThunk())}
            >
                Logout
            </button>
        </div>
    );
}

