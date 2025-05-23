import { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import style from './Navigation.module.css';

export default () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <nav>
            <ul className="nav gap-4">
                <li><NavLink to="/" className={style.navItem}>Home</NavLink></li>
                
                {isLoggedIn ?
                    <>
                        <li><NavLink to="/admin" className={style.navItem}>Admin</NavLink></li>              
                        <li><NavLink to="/logout" className={style.navItem}>Logout</NavLink></li>
                    </>
                :
                    <li><NavLink to="/login" className={style.navItem}>Login</NavLink></li>
                }
            </ul>
        </nav>
    );
}