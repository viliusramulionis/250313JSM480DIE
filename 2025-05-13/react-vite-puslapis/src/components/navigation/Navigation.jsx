import './Navigation.css';

export default () => {
    return (
        <nav>
            <ul>
                <li><a href="">Guide</a></li>
                <li><a href="">Config</a></li>
                <li><a href="">Plugins</a></li>
                <li><a href="">
                    <span>Resources</span>
                    <i class="bi bi-arrow-down-short"></i>
                </a></li>
                <li><a href="">
                    <span>Version</span>
                    <i class="bi bi-arrow-down-short"></i>
                </a></li>
            </ul>
        </nav>
    );
}