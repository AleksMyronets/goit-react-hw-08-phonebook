import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from 'redux/sliceUser';
import css from './Menu.module.css';

export const Menu = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch;

    return (
        <div>
            <p className={css.Email}>{user}</p>
            <button
                className={css.MenuButton}
                onClick={() => dispatch(logoutThunk())}
            >
                Logout
            </button>
        </div>
    );
}

