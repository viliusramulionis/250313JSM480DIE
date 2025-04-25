const cart = [];
const cartEl = document.querySelector('.cart');
const productsEl = document.querySelector('.products');
const formEl = document.querySelector('#form')
const subtotalEl = document.querySelector('.subtotal')
const totalPriceEl = document.querySelector('.total-price')

let shippingPrice = 0;
let discountPrice = 0;

const renderProductsData = () => {
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

    document.querySelector('.products-list').innerHTML = productList.join('');
}

const renderCartData = () => {
    const itemCountEl = document.querySelector('.item-count');
    const cartProductsEl = document.querySelector('.cart-products');
    
    // let string = `${cart.length} item`;

    // if(cart.length > 1) {
    //     string += 's';
    // }

    itemCountEl.textContent = `${cart.length} item` + (cart.length > 1 ? 's' : '');

    cartProductsEl.innerHTML = cart.map(item => {
        const product = data.products.find(product => product.id === item.id);

        return `<div class="row border-bottom py-4 align-items-center">
                    <div class="col">
                        <img src="${product.thumbnail}"
                            alt="">
                    </div>
                    <div class="col-4">
                        <div class="title">${product.title}</div>
                        <div class="description">${product.description.slice(0, 50)}...</div>
                    </div>
                    <div class="col">
                        <div class="d-flex">
                            <button class="empty-button" onclick="handleDown(event, ${product.id})">
                                <i class="bi bi-dash"></i>
                            </button>
                            <input 
                                type="number" 
                                class="form-control form-control-sm"
                                style="width: 60px;" 
                                value="${item.qty}"
                                onChange="handleQtyChange(event, ${product.id})"
                            >
                            <button class="empty-button" onclick="handleUp(event, ${product.id})">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col text-center">
                        <strong class="price">$ ${(product.price - (product.price / 100 * product.discountPercentage)).toFixed(2)}</strong>
                    </div>
                    <div class="col text-end">
                        <button class="empty-button text-secondary">
                            <i class="bi bi-x"></i>
                        </button>
                    </div>
                </div>`
    }).join('');
}

const handleSubmit = (e) => {
    // Sustabdome standartinį formos veikimą
    e.preventDefault();

    const formdata = new FormData(e.target);
    const result = {};

    for(const input of formdata.entries()) {
        result[input[0]] = input[1];
    }

    result.id = data.products[data.products.length - 1].id + 1;

    data.products.push(result);
    e.target.reset();

    e.target.parentNode.style.display = 'none';

    renderProductsData();
}

const showForm = () => {
    formEl.style.display = 'block';
}

const addToCart = (id) => {
    // Tikriname ar toks id jau buvo patalpintas krepšelio masyve
    const cartIndex = cart.findIndex(value => value.id === id);
    
    // Tikriname ar radome indeksą
    if(cartIndex >= 0) {
        // Jei taip tuomet objekte patalpintą qty reikšmę padidiname +1
        cart[cartIndex].qty++;
    } else {
        // Jei ne patalpiname objektą su kiekiu 1
        cart.push({ id, qty: 1 });
    }

    // console.log(cart);

    cartEl.style.display = 'block';
    productsEl.style.display = 'none';

    renderCartData();

    calculateSubtotal();

    calculateTotal();
}

const backtToProductsList = (e) => {
    e.preventDefault();

    cartEl.style.display = 'none';
    productsEl.style.display = 'block';
}

const handleQtyChange = (e, id) => {
    const value = +e.target.value;

    if(!Number.isInteger(value) || value <= 0) {
        e.target.value = 1;
    }

    const cartIndex = cart.findIndex(item => item.id === id);

    cart[cartIndex].qty = value;

    calculateSubtotal();
}

const handleUp = (e, id) => {
    const input = e.target.parentNode.previousElementSibling;

    input.value++;

    const cartIndex = cart.findIndex(item => item.id === id);

    cart[cartIndex].qty = +input.value;

    calculateSubtotal();
}

const handleDown = (e, id) => {
    const input = e.target.parentNode.nextElementSibling;

    if(+input.value <= 1) return;

    input.value--;

    const cartIndex = cart.findIndex(item => item.id === id);

    cart[cartIndex].qty = +input.value;

    calculateSubtotal();
}

const calculateSubtotal = () => {
    let subtotal = 0;

    for(const item of cart) {
        const product = data.products.find(product => product.id === item.id);
        const price = product.price - (product.price / 100 * product.discountPercentage);
        
        subtotal += price * item.qty;
    } 

    subtotalEl.textContent = `$ ${subtotal.toFixed(2)}`;
}

const calculateTotal = () => {
    const total = cart.reduce((currentSum, item) => {
        const product = data.products.find(product => product.id === item.id);
        const price = product.price - (product.price / 100 * product.discountPercentage);

        return currentSum + price * item.qty;
    }, 0);

    totalPriceEl.textContent = `$ ${(total + shippingPrice - (total * discountPrice)).toFixed(2)}`;
}

const handleShipping = (e) => {
    if(e.target.value === '1') {
        shippingPrice = 5;
    }

    if(e.target.value === '2') {
        shippingPrice = 2.99;
    } 

    calculateTotal();
}

const handleDiscount = (e) => {
    if(e.target.value.toLowerCase() === "vcs10") {
        discountPrice = 0.10;
    }

    calculateTotal();
}

window.onload = () => {
    renderProductsData();
}



