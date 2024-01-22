
        
        const colors = ['#ffcccb', '#c2e0c6', '#dcd0ff']; // Different colors for each product section

function addToCart(productId) {
    var productName = document.querySelector(`#footballs .product:nth-child(${productId}) h2`).innerText;
   
    const product = document.querySelector(`.product:nth-child(${productId + 1})`);
    product.classList.toggle('clicked');

    var productPrice = parseFloat(document.querySelector(`#footballs .product:nth-child(${productId}) .price`).innerText.replace('$', ''));

    var productName = document.querySelector(`#footballs .product:nth-child(${productId}) h2`).innerText;

    showPopUp(colors[productId % colors.length], `${productName} added to cart!`, 2000);


    function buyProduct() {
    showPopUp('#00ff00', 'Purchase successful! Thank you for shopping with ANike MArt.', 3000);

    clearCart();
}

function clearCart() {
    document.getElementById('cart-items').innerHTML = '';
    updateTotalPrice(0);
}


   
    var cartItem = document.createElement('li');
    cartItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;

    // Append the cart item to the cart
    document.getElementById('cart-items').appendChild(cartItem);

    
    updateTotalPrice(productPrice);

    // Get the corresponding product section and apply color
    var productSection = document.querySelector(`#footballs`);
    applyColor(productSection, productId);

    // Trigger the pop-out effect
    productSection.classList.add('pop-out');
    setTimeout(() => {
        productSection.classList.remove('pop-out');
    }, 500); 
}


function applyColor(element, productId) {
    element.style.backgroundColor = colors[productId % colors.length];
}


function updateTotalPrice(price) {
    // Get the current total price
    var totalPriceElement = document.getElementById('total-price');
    var currentTotal = parseFloat(totalPriceElement.innerText);

    // Update the total price
    var newTotal = currentTotal + price;
    totalPriceElement.innerText = newTotal.toFixed(2);
}

function buyAgain() {

    console.log('Buy Again clicked');
}        
    
function showPopUp(color,message, duration) {
            var popUp = document.getElementById('pop-up');
            popUp.innerText = message;
            popUp.style.backgroundColor = color;
            popUp.style.display = 'block';

            setTimeout(() => {
                popUp.style.display = 'none';
            }, 2000);
        }
    
