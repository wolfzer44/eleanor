// wait until DOM is ready
$(document).ready(function() {
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  $(window).on("load", function() {
    $(".preloader").fadeOut();
  });
});

/**
 * Scene 1
 */

let tl = gsap.timeline({ paused: false, reverse: false });
let controller = new ScrollMagic.Controller();

gsap.registerPlugin(new ScrollMagic());

gsap.to("#scene-1", 2, {
  width: "100%",
  ease: "Expo.easeInOut"
});

gsap.from(".banner", 0.8, {
  x: -270,
  y: -100,
  opacity: 0,
  ease: "Expo.easeInOut",
  delay: 1.6
});

gsap.from(".scene-1__phone", 1, {
  x: 170,
  opacity: 0,
  ease: "Expo.easeInOut",
  delay: 1.4
});

gsap.from(".scene-1__cars", 2, {
  x: "-200%",
  opacity: 0,
  ease: "Expo.easeInOut",
  delay: 0.4
});

/**
 * Scene 2
 */

tl.to(".slide", 0.6, {
  right: 0,
  ease: "Expo.easeInOut",
  delay: -1.2
});
tl.to("#scene-2 .description > h1", 0.8, {
  autoAlpha: 1,
  y: 0,
  ease: "Expo.easeInOut",
  delay: -1.2
});

tl.to("#scene-2  .description > p", 1.2, {
  y: 40,
  autoAlpha: 1,
  ease: "Expo.easeInOut",
  delay: -0.3
});

tl.to(".slide__item[name='landrover']", 1.2, {
  autoAlpha: 1,
  ease: "Expo.easeInOut",
  delay: -1
});

tl.to(".slide-images", 1.2, {
  right: "auto",
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -2.2
});

tl.fromTo(
  `.slide-images__item[name="landrover"]`,
  1.2,
  { opacity: 0 },
  { opacity: 1, ease: "Expo.easeInOut", delay: -2 }
);

new ScrollMagic.Scene({
  triggerElement: "section#scene-2",
  triggerHook: 0,
  reverse: false,
  offset: -200
})
  .setTween(tl) // trigger a TweenMax.to tween
  //.addIndicators()
  .addTo(controller);

/**
 *  SlideShow
 */

const nextEl = $(".slide__controls-arrow:nth-child(2)");
const previousEl = $(".slide__controls-arrow:nth-child(1)");

nextEl.click(switchSlide);
previousEl.click(switchSlide);

let SLIDE_STATE = "landrover";

function switchSlide() {
  SLIDE_STATE == "landrover" ? _porsche() : _landRover();
}

function _landRover() {
  SLIDE_STATE = "landrover";
  console.log(SLIDE_STATE);

  gsap.fromTo(
    `.slide__item[name='porsche']`,
    0.8,
    { opacity: 1 },
    { y: -50, opacity: 0, ease: "Expo.easeInOut" },
    { y: 0, opacity: 0, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide-images__item[name='porsche']`,
    0.8,
    { opacity: 1 },
    { x: -100, opacity: 0, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide-images__item[name='landrover']`,
    0.8,
    { x: 600, opacity: 0 },
    { x: 0, opacity: 1, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide__item[name='landrover']`,
    0.8,
    { y: 50, opacity: 0, ease: "Expo.easeInOut" },
    { y: 0, opacity: 1, ease: "Expo.easeInOut" }
  );
}
function _porsche() {
  SLIDE_STATE = "porsche";
  console.log(SLIDE_STATE);

  gsap.fromTo(
    `.slide__item[name='landrover']`,
    0.8,
    { opacity: 1 },
    { y: -50, opacity: 0, ease: "Expo.easeInOut" },
    { y: 0, opacity: 0, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide-images__item[name='landrover']`,
    0.8,
    { opacity: 1 },
    { x: -100, opacity: 0, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide-images__item[name='porsche']`,
    0.8,
    { x: 600, opacity: 0 },
    { x: 10, opacity: 1, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide__item[name='porsche']`,
    0.8,
    { y: 50, opacity: 0, ease: "Expo.easeInOut" },
    { y: 0, opacity: 1, ease: "Expo.easeInOut" }
  );

  gsap.fromTo(
    `.slide__item[name='porsche']`,
    0.8,
    { y: 50, opacity: 0, ease: "Expo.easeInOut" },
    { y: 0, opacity: 1, ease: "Expo.easeInOut" }
  );
}

/**
 * Scence 3
 */

const tl3 = gsap.timeline({ paused: false, reverse: false });

tl3
  .from("#scene-3 .map", 1, {
    right: -100,
    y: 20,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1.8
  })
  .to("#scene-3 .map", 0.9, {
    x: 0,
    y: 0,
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -1.6
  });

tl3
  .from("#scene-3 h1", 1, {
    y: -200,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -0.8
  })
  .to("#scene-3 h1", 1, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: -0.4
  });

tl3
  .from("#scene-3 .porsche", 1, {
    x: -400,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -0.8
  })
  .to("#scene-3 .porsche", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -0.8
  });

tl3.to("#scene-3 .mobile-only", 1, {
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -1.6
});

tl3
  .from("#scene-3 p", 1, {
    y: -50,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1.4
  })
  .to("#scene-3 p", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -1.2
  });

tl3
  .from("#scene-3 .app", 1, {
    y: "-150%",
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1.2
  })
  .to("#scene-3 .app", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -1
  });

new ScrollMagic.Scene({
  triggerElement: "section#scene-3",
  triggerHook: 0,
  reverse: false,
  offset: -325
})
  .setTween(tl3) // trigger a TweenMax.to tween
  //.addIndicators()
  .addTo(controller);

/**
 * Scene 4
 */

const tl4 = gsap.timeline({ paused: false, reverse: false });

tl4.to("#scene-4 .porsche", 1, {
  left: "0%",
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -0.4
});

tl4.to("#scene-4 .app", 1.2, {
  top: "6.5%",
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -0.8
});

tl4.to("#scene-4 .mobile-only", 1, {
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -0.8
});

tl4.to("#scene-4 .description > h1", 1.2, {
  top: 0,
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -0.8
});

tl4.to("#scene-4 .description > p", 1, {
  top: 0,
  opacity: 1,
  ease: "Expo.easeInOut",
  delay: -0.4
});

new ScrollMagic.Scene({
  triggerElement: "section#scene-4",
  triggerHook: 0,
  reverse: false,
  offset: -285
})
  .setTween(tl4) // trigger a TweenMax.to tween
  // .addIndicators()
  .addTo(controller);

/**
 * Scene 5
 */

const tl5 = gsap.timeline({ paused: false, reverse: false });

tl5.from("#scene-5 .container .item", 1, {
  y: -100,
  opacity: 0,
  stagger: 0.2,
  ease: "Expo.easeInOut"
});

new ScrollMagic.Scene({
  triggerElement: "section#scene-5",
  triggerHook: 0,
  reverse: false,
  offset: -485
})
  .setTween(tl5) // trigger a TweenMax.to tween
  // .addIndicators()
  .addTo(controller);

/**
 * Scene 5
 */

const tl6 = gsap.timeline({ paused: false, reverse: false });

tl6
  .from("#scene-6 .elements", 1.4, {
    x: "-100%",
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1.2
  })
  .to("#scene-6 .elements", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -1
  });

tl6
  .from("#scene-6 .elements img", 1, {
    x: "-100%",
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1.1
  })
  .to("#scene-6 .elements img", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -0.9
  });

tl6
  .from("#scene-6 .text", 1, {
    y: "-100%",
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1
  })
  .to("#scene-6 .text", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -0.8
  });

tl6
  .from("#scene-6 .mercedes", 1, {
    x: -300,
    opacity: 0,
    ease: "Expo.easeInOut",
    delay: -1
  })
  .to("#scene-6 .mercedes", 1, {
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: -0.8
  });

new ScrollMagic.Scene({
  triggerElement: "section#scene-6",
  triggerHook: 0,
  reverse: false,
  offset: -485
})
  .setTween(tl6) // trigger a TweenMax.to tween
  // .addIndicators()
  .addTo(controller);
