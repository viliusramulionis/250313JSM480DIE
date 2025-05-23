import { Link } from 'react-router';
import logo from './logo.svg';

export default () => {
    return(
        <Link to="/">
            <img src={logo} alt="Authorize" width="200" />
        </Link>
    );
}