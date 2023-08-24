import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import 'scroll-timeline.js';

// const scrollTracker = document.querySelector('.scroll-tracker');

/// animate in 2.5s
// document.querySelector('#scroll-tracker').animate(
//   {
//     backgroundColor: ['red', 'darkred'],
//     transform: ['scaleX(0)', 'scaleX(1)'],
//   },
//   {
//     duration: 2500,
//     fill: 'forwards',
//     easing: 'linear',
//   }
// );

/// animate bound to scroll
// document.querySelector('#scroll-tracker').animate(
//   {
//     backgroundColor: ['red', 'darkred'],
//     transform: ['scaleX(0)', 'scaleX(1)'],
//   },
//   {
//     duration: 1,
//     fill: 'forwards',
//     timeline: new ScrollTimeline({
//       source: document.scrollingElement,
//       scrollSource: document.scrollingElement,
//       orientation: 'block',
//       scrollOffsets: [
//         // CSS.px(250),
//         // CSS.percent(80),
//         new CSSUnitValue(0, 'percent'),
//         new CSSUnitValue(50, 'percent'),
//       ],
//     }),
//   }
// );

///FIXME: It's not 100% work, range end 50% not applied
/// new spec based on https://github.com/flackr/scroll-timeline (2023-08)
document.getElementById('scroll-tracker').animate(
  // { transform: ['translateY(0)', 'translateY(100px)'] },
  { transform: ['scaleX(0)', 'scaleX(1)'] },
  {
    fill: 'both',
    timeline: new ScrollTimeline({
      source: document.documentElement,
    }),
    rangeStart: new CSSUnitValue(0, 'percent'),
    rangeEnd: new CSSUnitValue(50, 'percent'),
    // rangeStart: new CSSUnitValue(0, 'px'),
    // rangeEnd: new CSSUnitValue(100, 'px'),
  }
);
