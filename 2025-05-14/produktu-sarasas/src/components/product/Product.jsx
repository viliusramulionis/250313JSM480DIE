import Rating from "../rating/Rating";
import Price from "../price/Price";
import './Product.css';

export default ({ data }) => {
    return (
        <div className="row border-top py-4">
            <div className="col-12 col-lg-3">
                <div className="image position-relative text-center text-lg-start pb-5 pb-lg-0">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        style={{ width: 200, height: 150, objectFit: 'cover' }}
                    />
                        <span className="discount">-{data.discountPercentage}%</span>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <h3 className="product-title">{data.title}</h3>
                
                <Rating data={data.rating} />

                <div className="description">
                    {data.description}
                </div>
            </div>
            <div className="col-12 col-lg-3">
                <Price data={data} />
                <div className="button">
                    <button className="btn btn-warning d-block w-100">Add to cart</button>
                </div>
            </div>
        </div>
    );
}