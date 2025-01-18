
// portfolio.js

// Get elements
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const videoSlides = document.querySelectorAll('.video-slide');
let currentSlide = 0; // Initial slide index

// Function to change the slide
function changeSlide() {
    // Hide all slides
    videoSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Show the current slide
    videoSlides[currentSlide].style.display = 'block';
}

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    // Increment the slide index
    currentSlide = (currentSlide + 1) % videoSlides.length; // Loop back to first slide when reaching the end
    changeSlide();
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    // Decrement the slide index
    currentSlide = (currentSlide - 1 + videoSlides.length) % videoSlides.length; // Loop to last slide when going backward
    changeSlide();
});

// Initialize the carousel by displaying the first slide
changeSlide();

const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // JavaScript for Infinite Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let index = 0;
        const slides = carousel.children;
        const totalSlides = slides.length;
        
        // Set interval to change slides every 3 seconds
        setInterval(() => {
            // Move to next slide
            index++;
            if (index === totalSlides) {
                index = 0; // Reset to first slide when the last slide is reached
            }

            // Slide transition effect
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 3000); // Slide every 3 seconds (3000 milliseconds)
    });
});


  
    

    
