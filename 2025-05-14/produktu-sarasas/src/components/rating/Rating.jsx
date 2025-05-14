import './Rating.css';

export default ({ data }) => {
    return (
        <div className="rating mb-3">
            <div className="stars-active" style={{ width: (data * 2 * 10) + '%' }}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
            <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
        </div>
    );
}