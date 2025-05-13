import Logo from '../logo/Logo'
import Search from '../search/Search'
import Navigation from '../navigation/Navigation';

export default () => {
    return (
        <header className="py-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4">
                <Logo />
                <Search />
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    );
}