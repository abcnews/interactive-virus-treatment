const animate = function(ks) {
  const tl = ks
    .animate(
      "#Coronavirus",
      [
        {
          p: "rotate",
          t: [1500, 2500, 3500],
          v: [0, -2, 0],
          e: [[1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#Highlights",
      [
        {
          p: "rotate",
          t: [1500, 2500, 3500],
          v: [0, -2, 0],
          e: [[1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#Edge",
      [
        {
          p: "d",
          t: [500, 1500],
          v: [
            "path('M153.7,24.3C139.6,24.3,128.1,82.1,128.1,153.4C128.1,224.6,139.6,282.4,153.7,282.4L153.7,24.3Z')",
            "path('M153.7,24.3C153.7,24.3,153.7,82.1,153.7,153.4C153.7,224.6,153.7,282.4,153.7,282.4L153.7,24.3Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Inside-left-mask",
      [
        {
          p: "d",
          t: [500, 1500],
          v: [
            "path('M153.7,34.5C140.7,34.5,130.2,87.8,130.2,153.4C130.2,219,140.7,272.2,153.7,272.2L153.7,34.5Z')",
            "path('M153.7,34.5C153.7,34.5,153.7,87.8,153.7,153.4C153.7,219,153.7,272.2,153.7,272.2L153.7,34.5Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Edge1",
      [
        {
          p: "d",
          t: [500, 1500],
          v: [
            "path('M153.7,24.3C213.1,24.3,261.4,82.1,261.4,153.4C261.4,224.6,213.1,282.4,153.7,282.4L153.7,24.3Z')",
            "path('M153.7,24.3C153.7,24.3,153.7,88.5,153.7,159.7C153.7,230.9,153.7,282.4,153.7,282.4L153.7,24.3Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Inside-right-mask",
      [
        {
          p: "d",
          t: [500, 1500],
          v: [
            "path('M153.7,34.5C208.4,34.5,252.8,87.8,252.8,153.4C252.8,219,208.4,272.2,153.7,272.2L153.7,34.5Z')",
            "path('M153.7,34.5C153.7,34.5,153.7,87.8,153.7,153.4C153.7,219,153.7,272.2,153.7,272.2L153.7,34.5Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#To-fade-out",
      [
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#To-fade-out-2",
      [
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#To-fade-out-3",
      [
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#To-fade-out-4",
      [
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#To-fade-out-5",
      [
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#Edge-elements",
      [{ p: "opacity", t: [500, 625], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#RNA-text",
      [{ p: "opacity", t: [0, 500], v: [1, 0], e: [[0], [0]] }],
      "#RNA-label-path",
      [
        { p: "opacity", t: [458, 500], v: [1, 0], e: [[0], [0]] },
        {
          p: "d",
          t: [0, 500],
          v: ["path('M8.6,-6.1L-72.7,94.5')", "path('M-72.7,94.5L-72.7,94.5')"],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      { autoremove: false, markers: { LoopStart: 1500 } }
    )
    .range(0, 3500);
  if (
    document.location.search
      .substr(1)
      .split("&")
      .indexOf("global=paused") >= 0
  )
    ks.globalPause();

  return tl;
};

module.exports = animate;
