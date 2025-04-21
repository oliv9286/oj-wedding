document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        interval: 3000
      });
    splide.mount();

    // Get the menu toggle button and the menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Add an event listener to toggle the menu visibility
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    function closeMenu(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuIcon.innerText = menuIcon.innerText === 'menu' ? 'close' : 'menu';
        }
    }

    document.addEventListener('click', closeMenu);

    menuIcon.addEventListener('click', () => {
        // Toggle between 'menu' and 'close' icons
        menuIcon.innerText = menuIcon.innerText === 'menu' ? 'close' : 'menu';
    });

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target ID
            const targetElement = document.querySelector(targetId);
        
            if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
            }
        });
    });


    const today = new Date();
    const targetDate = new Date('2025-06-28');
    const timeDifference = targetDate - today;
    const targetNumber = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const counterElement = document.getElementById("countdown");
    const duration = 2000;

    let currentNumber = 365;
    const startTime = performance.now(); // Track the start time

    // Function to animate the countdown using requestAnimationFrame
    function animateCountDown(timestamp) {
        const elapsedTime = timestamp - startTime;
        currentNumber = 365 - (elapsedTime / duration) * (365 - targetNumber); // Calculate the countdown value

        if (elapsedTime < duration) {
            counterElement.innerText = Math.ceil(currentNumber); // Update the displayed number (round up)
            requestAnimationFrame(animateCountDown); // Continue animating
        } else {
            counterElement.innerText = targetNumber; // Ensure we reach the target
        }
    }

    // Start the countdown animation
    requestAnimationFrame(animateCountDown);
});