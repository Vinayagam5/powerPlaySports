// Initialize cart count
let cartCount = 0;

// Select elements
const cartCountDisplay = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const toast = document.getElementById('toast');

// Add event listener to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment cart
        cartCount++;
        cartCountDisplay.textContent = cartCount;

        // Show Toast Notification
        showToast();
    });
});

// Function to handle the toast animation
function showToast() {
    toast.classList.remove('hidden');
    
    // Hide the toast after 2.5 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}

// --- Contact Form Handling ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page from refreshing

        // Show success toast notification
        const toast = document.getElementById('toast');
        toast.textContent = "Message sent successfully!";
        toast.classList.remove('hidden');
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);

        // Clear the form fields
        contactForm.reset();
    });
}