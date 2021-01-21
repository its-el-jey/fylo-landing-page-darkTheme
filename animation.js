/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});


sr.reveal('.header', {}); 
sr.reveal('.intro-heading', {delay:100}); 
sr.reveal('.intro-body', {delay:200}); 
sr.reveal('.intro__image', {}); 
sr.reveal('.button', {delay:300, interval:300}); 
sr.reveal('.feature__card', {delay:300, interval:300}); 
sr.reveal('.productive__image', {delay:300, interval:300}); 
sr.reveal('.productive-heading', {delay:300, interval:300}); 
sr.reveal('.productive-body', {delay:300, interval:300}); 
sr.reveal('.productive-link', {delay:300, interval:300}); 
sr.reveal('.testimonial_card', {delay:300, interval:300}); 
sr.reveal('.overlap__container', {delay:300, interval:300}); 