const words = ['Oskar', 'Motocross racer', 'Student', 'Gymrat'];

let cursor = gsap.to('.cursor', {opacity: 0, ease:'power2.inOut', repeat: -1});

let boxTL = gsap.timeline();
boxTL.to('.box', {duration: 1, width:"40vw", delay: 0.5, ease:"power4.inOut"})
  .from('.hi', {duration: 1, y:"7vw", ease:"power3.out"})
  .to('.box', {duration: 1, height:"6vw", ease:"elastic.out"});