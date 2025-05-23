import Logo from "../logo/Logo"
import Navigation from "../navigation/Navigation"
import style from './Header.module.css';

export default () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    )
}