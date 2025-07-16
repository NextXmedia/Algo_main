// $(document).ready(function () {
//  $('.product').owlCarousel({
//   loop: true,
//   margin: 20,
//   nav: false,
//   autoplay: true,
//   autoplayTimeout: 2000,
//   items: 1, // only 1 item to make vertical more meaningful
//   animateOut: 'slideOutUp',
//   animateIn: 'slideInUp'
// });

// })

$(document).ready(function () {
  $(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });
})

const swiper = new Swiper(".products-swip", {
  direction: "vertical",
  loop: true,
  parallax: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  effect: "coverflow",
  fadeEffect: {
    crossFade: true
  },
});

// 👉 Pause autoplay on hover
const swiperContainer = document.querySelector('.products-swip');

swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop(); // Pause autoplay
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // Resume autoplay
});


const swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  autoplay: {
    delay: 40000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionEnd: function () {
      // Remove text animation
      document.querySelectorAll('.animate-me').forEach(el => {
        el.classList.remove('animate-text');
        void el.offsetWidth;
      });

      document.querySelectorAll('.animate-left').forEach(el => {
        el.classList.remove('animate-txt-left');
        void el.offsetWidth;
      });

      // Remove image animation
      document.querySelectorAll('.animate-img').forEach(el => {
        el.classList.remove('fade-up');
        void el.offsetWidth;
      });

      // Animate text and image of active slide
      const activeSlide = document.querySelector('.swiper-slide-active');

      activeSlide.querySelectorAll('.animate-me').forEach(el => {
        el.classList.add('animate-text');
      });

      activeSlide.querySelectorAll('.animate-img').forEach(el => {
        el.classList.add('fade-up');
      });

      activeSlide.querySelectorAll('.animate-left').forEach(el => {
        el.classList.add('animate-txt-left');
      });
    },
  },
});

// Trigger first slide on load
window.addEventListener('load', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  activeSlide.querySelectorAll('.animate-me').forEach(el => {
    el.classList.add('animate-text');
  });
  activeSlide.querySelectorAll('.animate-img').forEach(el => {
    el.classList.add('fade-up');
  });
});



let splashScreen = document.getElementById('splash-screen');
let logoVar = document.getElementById('splash-logo');
document.addEventListener('DOMContentLoaded',
  function () {
    if (splashScreen) {
      setTimeout(function () {
        document.documentElement.style.overflow = "hidden";
        splashScreen.style.display = "flex"

        setTimeout(function () {
          document.documentElement.style.overflow = "unset";
          splashScreen.style.display = "none";

        }, 4000)

      }, 0)
    }
  }

)



// let navVar = document.querySelector('.navbar');
// let topNavVar = document.querySelector('.top-bar');



// window.addEventListener('scroll', function () {
//   navVar.style.transition = ".2s ease"
//   topNavVar.style.transition = ".2s ease"
//   let imglogoVar = this.document.querySelector('.logo-container img')
//   if (window.scrollY > 100) {
//     navVar.style.backgroundColor = "white";
//     navVar.classList.add("navbar-light");
// imglogoVar.src = "assets/Img/logo.png"
// navVar.classList.remove("navbar-dark");

// document.querySelector(".logo-container img").style.filter = "brightness(60%)";

// topNavVar.style.backgroundColor = "rgb(1 38 140) ";

// } else {
// navVar.style.backgroundColor = "transparent";
// imglogoVar.src = "assets/Img/algo white.png"
// navVar.classList.add("navbar-dark");

// navVar.classList.remove("navbar-light");

// document.querySelector(".logo-container img").style.filter = "brightness(1000%)";
// document.querySelector(".top-bar img").style.filter = "brightness(1000%)";

// topNavVar.style.backgroundColor = "transparent";
// topNavVar.style.color = "white";

//     document.querySelectorAll('.top-bar .social-icons a').forEach(function (el) {
//       el.style.color = "white";
//     });
//   }
// });


// Products section
document.addEventListener('DOMContentLoaded', function () {
  const selectorButtons = document.querySelectorAll('.selector-button');
  const applicationCards = document.getElementById('application-cards');
  const productTypeCards = document.getElementById('product-type-cards');

  selectorButtons.forEach(button => {
    button.addEventListener('click', function () {

      selectorButtons.forEach(btn => btn.classList.remove('active'));

      this.classList.add('active');


      const target = this.getAttribute('data-target');

      if (target === 'application') {
        productTypeCards.classList.add('fade-out');

        setTimeout(() => {
          productTypeCards.style.display = 'none ';


          applicationCards.style.opacity = 0;
          applicationCards.style.display = 'flex ';

          void applicationCards.offsetWidth;


          applicationCards.classList.add('fade-in');
          applicationCards.style.opacity = 1;
        }, 300);

      } else if (target === 'product-type') {

        applicationCards.classList.add('fade-out');

        setTimeout(() => {
          applicationCards.style.display = 'none';


          productTypeCards.style.opacity = 0;
          productTypeCards.style.display = 'flex';


          void productTypeCards.offsetWidth;


          productTypeCards.classList.add('fade-in');
          productTypeCards.style.opacity = 1;
        }, 300);
      }
    });
  });

  // Add hover effect for product cards
  // const productCards = document.querySelectorAll('.product-card');

  // productCards.forEach(card => {
  //   card.addEventListener('click', function () {
  //     // You can add functionality here for when a card is clicked
  //     console.log('Card clicked:', this.querySelector('h3').textContent);

  //     // Example: Navigate to a product detail page
  //     // window.location.href = '/product-detail/' + productId;
  //   });
  // });

  // Initialize the view with animation ready
  applicationCards.classList.add('fade-in');
  applicationCards.style.opacity = 1;
});


let pCardOpen = document.getElementsByClassName('submersible-pumpsets-1');
// let pcard = document.getElementsByClassName('.pCard');

function pCardFun(index) {
  pCardOpen[index].style.display = "block";
  document.body.style.overflow = "hidden";

}


function closedClick(index) {
  document.body.style.overflow = "auto";
  pCardOpen[index].style.display = "none";
}

function openModul() {
  document.querySelector('.modul-pop').style.display = "flex";
}
function modulClose() {
  document.querySelector('.modul-pop').style.display = "none";
}
// slider fade

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButtons = document.querySelectorAll('.prev');
  const nextButtons = document.querySelectorAll('.next');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Add active class to the current slide
    slides[index].classList.add('active');

    // Update progress bars
    const progressBars = document.querySelectorAll('.carousel-progress-bar');
    progressBars.forEach((bar, i) => {
      const slideIndex = Math.floor(i / document.querySelectorAll('.carousel-progress-bar').length * totalSlides);
      const width = ((index + 1) / totalSlides) * 100;
      bar.style.width = `${width}%`;
    });
  }

  // Function to go to next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Function to go to previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Add click event listeners to navigation buttons
  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      clearInterval(slideInterval);
      prevSlide();
      startAutoSlide();
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      clearInterval(slideInterval);
      nextSlide();
      startAutoSlide();
    });
  });

  // Function to start auto-sliding
  // function startAutoSlide() {
  //     slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  // }

  // Start auto-sliding when the page loads
  // startAutoSlide();
});


function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lang-menu li").forEach(item => {
    item.addEventListener("click", function () {
      const language = this.getAttribute("data-lang");
      const interval = setInterval(() => {
        const googleTranslateCombo = document.querySelector(".goog-te-combo");

        if (googleTranslateCombo) {
          googleTranslateCombo.value = language;
          googleTranslateCombo.dispatchEvent(new Event("change"));

          // Animation
          document.body.classList.add("fade-effect");
          setTimeout(() => document.body.classList.remove("fade-effect"), 800);

          clearInterval(interval);
        }
      }, 100);
    });
  });
});



// document.addEventListener("DOMContentLoaded", () => {

//   /* ===  1. handle EVERY dropdown / submenu  === */
//   const ALL_DROPS = document.querySelectorAll('.dropdown, .dropdown-submenu');

//   ALL_DROPS.forEach(drop => {
//     const toggle = drop.querySelector('[data-bs-toggle="dropdown"]');
//     const menu   = drop.querySelector('.dropdown-menu');

//     /* Desktop: open on hover */
//     drop.addEventListener('mouseenter', () => {
//       if (window.innerWidth >= 992) bootstrap.Dropdown.getOrCreateInstance(toggle).show();
//     });
//     drop.addEventListener('mouseleave', () => {
//       if (window.innerWidth >= 992) bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
//     });

//     /* Mobile: toggle on click/tap */
//     toggle.addEventListener('click', evt => {
//       if (window.innerWidth < 992) {
//         evt.preventDefault();                       // don’t follow “#”
//         evt.stopPropagation();                      // don’t close parents
//         menu.classList.toggle('show');
//         // close any open sibling sub‑menus at this level
//         drop.parentElement.querySelectorAll('.dropdown-menu.show')
//             .forEach(open => (open !== menu) && open.classList.remove('show'));
//       }
//     });
//   });

//   /* ===  2. close EVERYTHING when you click outside  === */
//   document.addEventListener('click', evt => {
//     if (!evt.target.closest('.dropdown')) {
//       document.querySelectorAll('.dropdown-menu.show')
//               .forEach(m => m.classList.remove('show'));
//     }
//   });

//   /* ===  3. keep your existing off‑canvas nav animation  === */
//   const offcanvas = document.getElementById('offcanvasNavbar');
//   offcanvas?.addEventListener('shown.bs.offcanvas', function () {
//     this.querySelectorAll('.nav-item').forEach((item, i) => {
//       item.style.animationDelay = `${(i + 1) * 0.1}s`;
//       item.style.animation      = 'slideInNav 0.5s ease forwards';
//     });
//   });

// });


// Language switcher functionality
document.querySelectorAll('.lang-menu li').forEach(item => {
  item.addEventListener('click', function () {
    const lang = this.getAttribute('data-lang');
    const langText = this.textContent.trim();
    document.querySelector('.lang-btn').innerHTML = `<i class="bi bi-globe-asia-australia"></i> ${langText}`;
  });
});

// Navbar scroll effect
// window.addEventListener('scroll', function () {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 50) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });


// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced hover effects for social links
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });

  link.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click tracking for contact links
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('click', function () {
    const type = this.href.includes('tel:') ? 'phone' :
      this.href.includes('mailto:') ? 'email' : 'website';
    console.log(`Contact clicked: ${type} - ${this.href}`);
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in effect to footer sections
document.querySelectorAll('.footer-section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Add subtle hover effects to location badges
document.querySelectorAll('.location-badge').forEach(badge => {
  badge.addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  });

  badge.addEventListener('mouseleave', function () {
    this.style.boxShadow = 'none';
  });
});

// Initialize responsive behavior
function handleResize() {
  const width = window.innerWidth;
  const socialLinks = document.querySelector('.social-links');

  if (width < 576) {
    socialLinks.style.gap = '10px';
  } else {
    socialLinks.style.gap = '15px';
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial call

// Add loading states for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', function () {
    const originalText = this.textContent;
    this.style.opacity = '0.7';
    setTimeout(() => {
      this.style.opacity = '1';
    }, 300);
  });
});