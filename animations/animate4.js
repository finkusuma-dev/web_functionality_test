// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import './scroll-timeline.js';

/// animated one box
const animatedBox = document.querySelector('#box-animated');

animatedBox.animate(
  {
    backgroundColor: ['red', 'darkred'],
    // width: ['0', '100%'],
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    // duration: 1,
    fill: 'both',
    timeline: new ViewTimeline({
      subject: animatedBox,
      source: document.documentElement,
    }),
    rangeStart: { rangeName: 'contain', offset: CSS.percent(20) },
    rangeEnd: { rangeName: 'contain', offset: CSS.percent(80) },
    // rangeStart: { rangeName: 'contain', offset: CSS.percent(0) },
    // rangeEnd: { rangeName: 'contain', offset: CSS.percent(50) },
  }
);

/// animated boxes with specified class
// const animatedBoxes = document.querySelectorAll('.box-animated');

// animatedBoxes.forEach((animatedBox) => {
//   animatedBox.animate(
//     {
//       backgroundColor: ['red', 'darkred'],
//       width: ['0', '100%'],
//       // transform: ['scaleX(0)', 'scaleX(1)'],
//     },
//     {
//       // duration: 1,
//       fill: 'both',
//       timeline: new ViewTimeline({
//         subject: animatedBox,
//       }),
//       rangeStart: { rangeName: 'contain', offset: CSS.percent(20) },
//       rangeEnd: { rangeName: 'contain', offset: CSS.percent(100) },
//       // rangeStart: { rangeName: 'contain', offset: CSS.percent(0) },
//       // rangeEnd: { rangeName: 'contain', offset: CSS.percent(50) },
//     }
//   );
// });

/// old and not worked implementation

// animatedBox.animate(
//   {
//     // backgroundColor: ['red', 'darkred'],
//     transform: ['scaleX(0)', 'scaleX(1)'],
//   },
//   {
//     // duration: 1,
//     fill: 'both',
//     timeline: new ScrollTimeline({
//       source: document.scrollingElement,
//       // scrollSource: document.scrollingElement,
//       // orientation: 'block',
//       // scrollOffsets: [
//       //   { target: animatedBox, edge: 'end', threshold: '1' },
//       //   { target: animatedBox, edge: 'start', threshold: '1' },
//       // ],
//     }),
//     rangeStart: { target: animatedBox, edge: 'end', threshold: '1' },
//     rangeEnd: { target: animatedBox, edge: 'start', threshold: '1' },
//   }
// );

/// error: animated box only fills 50%
// animatedBox.animate(
//   {
//     // backgroundColor: ['red', 'darkred'],
//     transform: ['scaleX(0)', 'scaleX(1)'],
//   },
//   {
//     duration: 1,
//     // fill: 'forwards',
//     timeline: new ScrollTimeline({
//       // source: document.scrollingElement,
//       // scrollSource: document.scrollingElement,
//       // orientation: 'block',
//       // scrollOffsets: [
//       //   { target: animatedBox, edge: 'end', threshold: '1' },
//       //   { target: animatedBox, edge: 'start', threshold: '1' },
//       // ],
//     }),
//   }
// );
