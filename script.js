TweenMax.to(".loader-screen", 4, {
    delay: 5.6,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.to(".logo", 2, {
    delay: 2.6,
    opacity: 1,
    ease: Back.easeOut
});

TweenMax.from(".navbar-logo", 3, {
    delay: 6.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
TweenMax.from(".navbar-links", 3, {
    delay: 6.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
TweenMax.from(".circle-slider", 3, {
    delay: 6.5,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 2000,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3500
  });

 