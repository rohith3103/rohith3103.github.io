// This script handles all interactive and dynamic elements of the portfolio.

// 1. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Animate Elements on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            // Optional: reset animation when not in view
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});


// 3. Particles.js Initialization for the entire page
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 30, // Lower density
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFA500" // Accent color for particles
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ADD8E6",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Slower movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
            }
        }
    },
    "interactivity": {
        "detect_on": "window", // Changed this to 'window'
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // This mode enables the touch responsive effect
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// 4. "Reset" button functionality
const resetButton = document.getElementById('reset-button');
const mainContent = document.getElementById('main-content');
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.classList.toggle('reset-active');
});

// 5. "RR" Button Magic
const signatureButton = document.getElementById('signature-button');
const body = document.body;
signatureButton.addEventListener('click', () => {
    body.classList.toggle('magic-active');
});

// 6. Typing Animation
const nameElement = document.querySelector('.animated-name');
const nameText = "ROHITH REDDY BETHI";
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        nameElement.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// 7. Horizontal Scroll Highlight
function highlightCenterCard(container) {
    if (!container) return; // Add a check to prevent errors
    const cards = container.children;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        
        const distance = Math.abs(containerCenter - cardCenter);
        const isCentered = distance < cardRect.width / 2;
        
        if (isCentered) {
            card.classList.add('is-centered');
        } else {
            card.classList.remove('is-centered');
        }
    }
}

const projectsScrollContainer = document.querySelector('.project-grid');
const certScrollContainer = document.querySelector('.certificate-scroll-container');

if (projectsScrollContainer) {
  projectsScrollContainer.addEventListener('scroll', () => highlightCenterCard(projectsScrollContainer));
}
if (certScrollContainer) {
  certScrollContainer.addEventListener('scroll', () => highlightCenterCard(certScrollContainer));
}

window.addEventListener('load', () => {
    if (projectsScrollContainer) highlightCenterCard(projectsScrollContainer);
    if (certScrollContainer) highlightCenterCard(certScrollContainer);
});