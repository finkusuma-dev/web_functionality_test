import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import './scroll-timeline.js';

/// animated one box
const animatedBox = document.querySelector('#box-animated');

animatedBox.animate(
  {
    backgroundColor: ['red', 'darkred'],
    // width: ['0', '100%'],
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    fill: 'both',
    timeline: new ViewTimeline({
      subject: animatedBox,
      // source: document.documentElement,
      axis: 'block',
    }),
    rangeStart: { rangeName: 'contain', offset: CSS.percent(0) },
    rangeEnd: { rangeName: 'contain', offset: CSS.percent(100) },
  }
);
