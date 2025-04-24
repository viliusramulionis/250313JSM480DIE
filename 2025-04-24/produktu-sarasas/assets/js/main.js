const cart = [];

const renderData = () => {
    const productList = data.products.map(row => {
        const nuolaida = row.price / 100 * row.discountPercentage;
        const galutineKaina = row.price - nuolaida;

        return `<div class="row border-top py-4">
                <div class="col-12 col-lg-3">
                    <div class="image position-relative text-center text-lg-start pb-5 pb-lg-0">
                        <img 
                            src="${row.thumbnail}" 
                            alt="Nuotrauka"
                            style="width: 200px; height: 150px; object-fit: cover;"
                        >
                        <span class="discount">-${row.discountPercentage}%</span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
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
                <div class="col-12 col-lg-3">
                    <div class="price mb-4">
                        <span class="current">$${galutineKaina.toFixed(2)}</span>
                        <span class="old">$${row.price}</span>
                    </div>
                    <div class="button">
                        <button class="btn btn-warning d-block w-100" onclick="addToCart(${row.id})">Add to cart</button>
                    </div>
                </div>
            </div>
        `
    });

    document.querySelector('.result').innerHTML = productList.join('');
}

const handleSubmit = (e) => {
    // Sustabdome standartinį formos veikimą
    e.preventDefault();

    // PIRMAS VARIANTAS:

    const formdata = new FormData(e.target);
    const result = {};

    for(const input of formdata.entries()) {
        // console.log(input);
        // result.push({ [input[0]]: input[1] })

        result[input[0]] = input[1];
    }

    result.id = data.products[data.products.length - 1].id + 1;

    // ANTRAS VARIANTAS:

    // const result = {};

    // e.target.querySelectorAll('input').forEach(el => {
    //     result[el.name] = el.value;
    // });

    // const textarea = e.target.querySelector('textarea');

    // result[textarea.name] = textarea.value;

    // console.log(result);

    // DUOMENŲ TALPINIMAS:

    data.products.push(result);

    // Formos elementas turi priskirtą metodą reset() (išvalo formos laukelius)
    e.target.reset();

    e.target.parentNode.style.display = 'none';

    renderData();
}

const showForm = () => {
    // document.getElementById('form')

    document.querySelector('#form').style.display = 'block';
}

const addToCart = (id) => {
    cart.push(id);
    console.log(cart);
}

window.onload = () => {
    renderData();
}

// window.onscroll = () => {
//     console.log('Važiuojam žemyn');
// }

// window.onresize = () => {
//     console.log('Lango dydis pakeistas');
// }

// CRUD:
// CREATE
// READ 
// UPDATE
// DELETE


