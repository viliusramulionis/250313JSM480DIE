import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

export default () => {
    const user = useContext(AuthContext);

    return (
        <footer className="p-3 text-bg-dark mt-5">
            <div className="container">
                {!user &&
                    <nav className="mb-3">
                        <ul className="nav d-flex justify-content-center gap-4">
                            <li><Link to="/login" className="text-white">Login</Link></li>
                            <li><Link to="/signup" className="text-white">Signup</Link></li>
                        </ul>
                    </nav>
                }
                <div className="text-center">
                    2025 All rights reserved
                </div>
            </div>
        </footer>
    );
}