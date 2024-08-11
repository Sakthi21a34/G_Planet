document.addEventListener('DOMContentLoaded', function () {
    const cartCountElement = document.getElementById('cart-count');
    
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length;
    }
    
    function addToCart(product, url) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ product, url });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product} added to cart`);
    }
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.getAttribute('data-product');
            const url = this.getAttribute('data-url');
            addToCart(product, url);
        });
    });
    
    updateCartCount();
});

// Navbar

document.getElementById("customNavbarToggler").addEventListener("click", function() {
    var navbarNav = document.getElementById("navbarNav");
    if (navbarNav.classList.contains("collapse")) {
        navbarNav.classList.remove("collapse");
    } else {
        navbarNav.classList.add("collapse");
    }
});

// User Rating

var rate=document.getElementById('rate');
        var r=Math.random()
        var f=Math.floor(r*10000);
        function rating(){
            rate.innerHTML=`${f} Ratings`;
        }