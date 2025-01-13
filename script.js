document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content');
  const expectNav = document.getElementById('expect-nav');
  const expectSection = document.getElementById('expect');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const form = document.getElementById('registration-form');
  const modal = document.getElementById("success-modal");
  const closeBtn = document.querySelector(".close-btn");

  // Smooth Scroll and Trigger Animation on Click
  expectNav.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById('expect');
    
    // Smooth scroll to the section
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Account for fixed header
      behavior: 'smooth'
    });

    // Trigger animation after scrolling completes
    setTimeout(() => {
      content.classList.add('visible'); // Add the class to trigger animation
    }, 500); // Wait for scroll to complete
  });

  // IntersectionObserver to animate when section is visible
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        content.classList.add('visible'); // Trigger animation when in view
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  // Observe the '.content' element
  observer.observe(content);

  // Function to handle the Intersection Observer logic for 'animate' class
  const animateObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'animate' class when the section is in view
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, {
    threshold: 0.5  // Trigger when 50% of the section is in view
  });

  // Observe all elements with the 'animate' class
  document.querySelectorAll('.animate').forEach((element) => {
    animateObserver.observe(element);
  });



  // Handle hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
