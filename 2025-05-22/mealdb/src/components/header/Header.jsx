import { useContext } from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import UserProfile from "../user-profile/UserProfile";
import AuthContext from "../../context/AuthContext";
import './Header.css';

export default () => {
    const user = useContext(AuthContext);

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center gap-4 justify-content-center justify-content-lg-between">
                    <Logo />
                    <Navigation />
                    {user &&
                        <UserProfile />
                    }
                </div>
            </div>
        </header>
    );
}