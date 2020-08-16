const words = ['Oskar', 'a Motocross racer', 'a Student', 'a Frontend Developer'];

let cursor = gsap.to('.cursor', {opacity: 0, ease:'power2.inOut', repeat: -1});

let boxTL = gsap.timeline();
let masterTL = gsap.timeline({repeat: -1}).pause();

boxTL.to('.box', {duration: 1, width:"20vw", delay: 0.5, ease:"power4.inOut"})
  .from('.hi', {duration: 1, y:"3.1vw", ease:"power3.out", onComplete: () => masterTL.play()})
  .to('.box', {duration: 1, height:"2.9vw", ease:"elastic.out"})
  .to('.box', {duration: 2, autoAlpha: 0.7, yoyo: true, repeat: -1, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"});

words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
  tl.to('.text', {duration: 1, text: word});
  masterTL.add(tl);
});