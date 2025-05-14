import './Price.css';

export default ({ data }) => {
    const discount = data.price / 100 * data.discountPercentage;
    const finalPrice = data.price - discount;

    return (
        <div className="price mb-4">
            <span className="current">${finalPrice.toFixed(2)}</span>
            <span className="old">${data.price}</span>
        </div>
    );
}