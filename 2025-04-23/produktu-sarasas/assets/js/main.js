const productList = data.products.map(row => {
        const nuolaida = row.price / 100 * row.discountPercentage;
        const galutineKaina = row.price - nuolaida;

        return `<div class="row border-top py-4">
            <div class="col-3">
                <div class="image position-relative">
                    <img 
                        src="${row.thumbnail}" 
                        alt="Nuotrauka"
                        style="width: 200px; height: 150px; object-fit: cover;"
                    >
                    <span class="discount">-${row.discountPercentage}%</span>
                </div>
            </div>
            <div class="col-6">
                <h3 class="product-title">${row.title}</h3>
                <div class="rating mb-3">
                    <div class="stars-active" style="width: ${row.rating * 2 * 10}%;">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                </div>
                <div class="description">
                    ${row.description}
                </div>
            </div>
            <div class="col-3">
                <div class="price mb-4">
                    <span class="current">$${galutineKaina.toFixed(2)}</span>
                    <span class="old">$${row.price}</span>
                </div>
                <div class="button">
                    <button class="btn btn-warning d-block w-100">Add to cart</button>
                </div>
            </div>
        </div>
    `
});

document.querySelector('.result').innerHTML = productList.join('');