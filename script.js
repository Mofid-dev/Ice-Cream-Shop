let productsHTML = '';

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
            <button class="add-to-cart js-add-to-cart"
            data-product-id="${product.id}">Add to cart</button>
        </div>
    </div>
    `;
});

document.querySelector(".product-grid").innerHTML = productsHTML

document.querySelectorAll(".js-add-to-cart")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.dataset.productId;

            let matchingItem;

            cart.forEach((item) => {
                if (productId === item.productId){
                    matchingItem = item
                }
            });

            if (matchingItem) {
                matchingItem.quantity +=1;
            } else {
                cart.push({
                    productId: productId,
                    quantity: 1
                })
            }

            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;
            })

            document.querySelector(".js-count-items")
                .innerHTML = cartQuantity

        })
    })