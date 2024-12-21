let tl = gsap.timeline();

tl.to;

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 1,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.4,
});
