// Get the menu toggle button and the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add an event listener to toggle the menu visibility
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
