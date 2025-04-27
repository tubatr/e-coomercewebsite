// script.js
let cart = [];
const cartBtn = document.getElementById("cart-btn");
const cartSection = document.getElementById("cart");
const cartItemsList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

const products = [
    { name: "Kupa", price:400 },
    { name: "Masa Lambası", price:250 },
    { name: "Dekoratif Sehpa", price: 300 },
    { name: "Tablo", price: 890 },
    { name: "Avize", price: 500 },
    { name: "Divit Seti", price: 999},
    { name: "Bohem Kilim", price: 400 },
    { name: "Etnik Desen Kilim", price: 1999 },
    { name: "Kuyruklu Piyano", price:11.999999},
    { name: "Fotoğraf Makinesi", price:59.999}
];

const addToCartBtns = document.querySelectorAll(".add-to-cart");
addToCartBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        addToCart(products[index]);
    });
});

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = cart.length;
    cartBtn.textContent = `Sepetim (${cartCount})`;

    const cartItemsHTML = cart.map(product => `<li>${product.name} - ${product.price}₺</li>`).join("");
    cartItemsList.innerHTML = cartItemsHTML;

    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    totalPriceElement.textContent = `Toplam Fiyat: ${totalPrice}₺`;
}

cartBtn.addEventListener("click", () => {
    cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
});

checkoutBtn.addEventListener("click", () => {
    alert("Ödeme işlemi başarıyla tamamlandı!");
    cart = [];
    updateCart();
});
