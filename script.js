const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-bar-links");

let productsHTML = ''
products.forEach(product => {
    productsHTML += `
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
    `;
});

document.querySelector(".product-grid").innerHTML = productsHTML

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});