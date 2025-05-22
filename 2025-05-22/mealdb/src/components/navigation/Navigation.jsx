import { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import style from './Navigation.module.css';

export default () => {
    const user = useContext(AuthContext);

    const setNavClass = ({ isActive }) => isActive ? style.navlink + ' ' + style.active : style.navlink;
    
    return (
        <nav>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-4">
                <li><NavLink to="/" className={setNavClass}>Home</NavLink></li>
                <li><NavLink to="/search" className={setNavClass}>Search</NavLink></li>
                {!user &&
                    <>
                        <li><NavLink to="/login" className={setNavClass}>Login</NavLink></li>
                        <li><NavLink to="/signup" className={setNavClass}>Signup</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    );
}