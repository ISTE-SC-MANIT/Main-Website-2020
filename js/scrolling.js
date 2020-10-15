var navbar = document.getElementById("bar");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    navbar.classList.add("hhd");

  } else {
    if (navbar.classList.contains("hhd"))
      navbar.classList.remove("hhd");
  }
}

// Section Fade In Animation

let controller;
let fadeInScene;
let activeNavScene;

function fadeIn() {
  // Init Controller
  controller = new ScrollMagic.Controller();
  // Select all sections
  const sections = document.querySelectorAll('.section');
  // Loop over each section
  sections.forEach(section => {
    const opacityTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" }
    });
    opacityTl.fromTo(section, { opacity: 0 }, { opacity: 1 });
    // Create Scene
    fadeInScene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.7,
      reverse: false
    })
      .setTween(opacityTl)
      // .addIndicators({ colorStart: 'red', colorTrigger: 'yellow', name: 'section' })
      .addTo(controller);
  })
}

// Active Nav-link Animation

const scenes = {
  'home': 'home-link',
  'about-section': 'about-link',
  'event-section': 'event-link',
  'contact': 'contact-link'
}

function activeNav() {
  // Init Controller
  controller = new ScrollMagic.Controller();
  // Select all sections
  const sections = document.querySelectorAll('.section');
  // Loop over each section
  sections.forEach(section => {
    let link = scenes[section.id];
    if (section.id === "contact") {
      var hook = 0.75;
      var durtn = section.clientHeight - 50;
    } else if (section.id === "event-section") {
      var hook = 0.25;
      var durtn = section.clientHeight - 150;
    } else {
      var hook = 0.25;
      var durtn = section.clientHeight + 100;
    }
    activeNavScene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: hook,
      duration: durtn,
      reverse: true
    })
      // .addIndicators({ colorStart: 'red', colorTrigger: 'yellow', name: 'section' })
      .setClassToggle('#' + link, 'active')
      .addTo(controller);
  })
}

fadeIn();
activeNav();
