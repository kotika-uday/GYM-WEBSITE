document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering!');
    this.reset(); // Reset form fields after submission
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    this.reset(); // Reset form fields after submission
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display current date and time in the footer
window.addEventListener('load', function() {
    const footer = document.querySelector('footer p');
    const now = new Date();
    footer.innerHTML += ` | ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
});

// Dynamically add gallery images
const galleryImages = ['images/gallery1.jpg', 'images/gallery2.jpg', 'images/gallery3.jpg'];
const gallerySection = document.getElementById('gallery');
if (gallerySection) {
    galleryImages.forEach(src => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = src;
        div.appendChild(img);
        gallerySection.appendChild(div);
    });
}
