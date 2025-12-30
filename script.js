const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-bar-links");
const productGrid = document.querySelector(".product-grid")

const products = [{
    image: "images/products/product-1.png",
    name: "strawberry",
    detail: "Associate with being lively, creative and dramatic",
    price: 14.99,
    rating: 4.5
}, {
    image: "images/products/product-2.png",
    name: "Vanilla",
    detail: "Associate with being lively, creative and dramatic",
    price: 2499,
    rating: 5
}, {
    image: "images/products/product-3.png",
    name: "Buttered Pecan",
    detail: "Associate with being lively, creative and dramatic",
    price: 1150,
    rating: 4.5
}, {
    image: "images/products/product-4.webp",
    name: "Buttered Pecan",
    detail: "Associate with being lively, creative and dramatic",
    price: 1899,
    rating: 5
}, {
    image: "images/products/product-5.png",
    name: "Cookie Dough",
    detail: "Associate with being lively, creative and dramatic",
    price: 1999,
    rating: 5
}, {
    image: "images/products/product-6.png",
    name: "Moose Tracks",
    detail: "Associate with being lively, creative and dramatic",
    price: 999,
    rating: 4
}, {
    image: "images/products/product-7.png",
    name: "Buttered Pecan",
    detail: "Associate with being lively, creative and dramatic",
    price: 1599,
    rating: 4.5
}, {
    image: "images/products/product-8.png",
    name: "Mint Chocolate",
    detail: "Associate with being lively, creative and dramatic",
    price: 899,
    rating: 4
}]


products.forEach(product => {
    const html = `
    <div class="product-container">
        <div class="product-image">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-detail">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-info">${product.detail}</div>
            <p class="price">$${(product.price / 100).toFixed(2)}</p>
            <div class="rating">
                <img src="images/ratings/rating-${product.rating * 10}.png" alt="">
            </div>
            <button class="add-to-cart">Add to cart</button>
        </div>
    </div>
    `
    productGrid.innerHTML += html
    console.log(product)
});

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});