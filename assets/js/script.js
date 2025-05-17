$(document).ready(function () {
  $('.product').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
})
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



let navVar = document.querySelector('.navbar');
let topNavVar = document.querySelector('.top-bar');



window.addEventListener('scroll', function () {
  navVar.style.transition = ".2s ease"
  topNavVar.style.transition = ".2s ease"
  let imglogoVar = this.document.querySelector('.logo-container img')
  if (window.scrollY > 100) {
    navVar.style.backgroundColor = "white";
    navVar.classList.add("navbar-light");
    imglogoVar.src = "assets/Img/logo.png"
    navVar.classList.remove("navbar-dark");

    // document.querySelector(".logo-container img").style.filter = "brightness(60%)";

    topNavVar.style.backgroundColor = "rgb(1 38 140) ";

  } else {
    navVar.style.backgroundColor = "transparent";
    imglogoVar.src = "assets/Img/algo white.png"
    navVar.classList.add("navbar-dark");

    navVar.classList.remove("navbar-light");

    // document.querySelector(".logo-container img").style.filter = "brightness(1000%)";
    // document.querySelector(".top-bar img").style.filter = "brightness(1000%)";

    topNavVar.style.backgroundColor = "transparent";
    topNavVar.style.color = "white";

    document.querySelectorAll('.top-bar .social-icons a').forEach(function (el) {
      el.style.color = "white";
    });
  }
});


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

function openModul(){
  document.querySelector('.modul-pop').style.display = "flex";
}
function modulClose(){
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

