// ===== Navigation Enhancements =====

// Highlight active navigation link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Product Interactions =====

// Add hover animation to product cards
const products = document.querySelectorAll('.product');
products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.style.transform = 'scale(1.05)';
    product.style.transition = 'transform 0.3s ease';
  });
  product.addEventListener('mouseout', () => {
    product.style.transform = 'scale(1)';
  });
});

// Add to Cart button animation
document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
    alert("Item added to cart!");
  });
});

// ===== Contact Form =====

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you for contacting us! We'll reply soon.");
    contactForm.reset();
  });
}

// ===== Checkout Form =====

const checkoutForm = document.querySelector('#checkout-form');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const payment = document.getElementById('payment').value;

    if (!name || !address || !payment) {
      alert("⚠️ Please fill in all fields before placing your order.");
      return;
    }

    alert("✅ Order placed successfully! Thank you for shopping with us.");
    checkoutForm.reset();
  });
}

// ===== Orders Table =====

const rows = document.querySelectorAll('.orders-table tr');
rows.forEach(row => {
  row.addEventListener('mouseover', () => {
    row.style.backgroundColor = '#cce0ff';
  });
  row.addEventListener('mouseout', () => {
    row.style.backgroundColor = '';
  });
});

// ===== Gallery =====

const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    // Simple lightbox effect
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    const enlarged = document.createElement('img');
    enlarged.src = img.src;
    enlarged.style.maxWidth = '90%';
    enlarged.style.maxHeight = '90%';
    enlarged.style.borderRadius = '8px';
    enlarged.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';

    overlay.appendChild(enlarged);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});

// ===== Footer Year Auto Update =====

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
