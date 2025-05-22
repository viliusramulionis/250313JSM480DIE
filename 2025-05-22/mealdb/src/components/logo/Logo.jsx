import { Link } from 'react-router';
import logo from './logo.svg';
import style from './Logo.module.css';

export default () => {
    return (
        <Link to="/">
            <img src={logo} alt="" className={style.logo} />
        </Link>
    );
}