import './Search.css';

export default () => {
    return (
        <div className="position-relative">
            <i class="bi bi-search position-absolute"></i>
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Search"
            />
        </div>
    );
}