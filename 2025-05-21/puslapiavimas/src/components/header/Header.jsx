import { Link } from 'react-router';

// Naudojant react-router įskiepį a elementai yra nenaudojami
export default () => {
    return (
        <header className="d-flex justify-content-between align-items-center py-5">
            <h3>Logotipas</h3>
            <nav>
                <ul className="d-flex gap-4 m-0" style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/">Titulinis</Link>
                    </li>
                    <li>
                        <Link to="/apie-mus">Apie Mus</Link>
                    </li>
                    <li>
                        <Link to="/kontaktai">Kontaktai</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}