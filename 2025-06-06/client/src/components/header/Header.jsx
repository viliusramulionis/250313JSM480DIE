import { Link } from "react-router";

const Header = ({ user }) => {
    return (
        <header className="p-3 text-bg-dark mb-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-secondary">Pagrindinis</Link></li>
                    </ul>
                    {!user &&
                        <div className="text-end">
                            <Link to="/login" className="btn btn-outline-light me-2">Prisijungti</Link>
                            <Link to="/register" className="btn btn-warning">Registracija</Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;