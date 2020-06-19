const animate = function(ks) {
  const tl = ks
    .animate(
      "#Coronavirus",
      [
        {
          p: "mpath",
          t: [500, 1500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M152.6,721.1L-51.4,721.1"
        },
        {
          p: "rotate",
          t: [750, 2000],
          v: [0, 61],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "opacity",
          t: [500, 1500],
          v: [0.3, 1],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "filter",
          t: [500, 1500],
          v: ["saturate(0)", "saturate(1)"],
          e: [[0], [0]]
        }
      ],
      "#Cell",
      [
        {
          p: "mpath",
          t: [500, 2500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M1276.6,689.6L722.4,695.7"
        },
        { p: "opacity", t: [500, 1500], v: [0, 1], e: [[0], [0]] }
      ],
      "#Focus-spike",
      [
        {
          p: "mpath",
          t: [500, 1500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M152.6,721.1L-51.4,721.1"
        },
        {
          p: "rotate",
          t: [750, 2000],
          v: [0, 60],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        { p: "opacity", t: [500, 1500], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#Spike-protein-text",
      [{ p: "opacity", t: [0, 500], v: [1, 0], e: [[0], [0]] }],
      "#Spike-protein-label-path",
      [
        { p: "opacity", t: [458, 500], v: [1, 0], e: [[0], [0]] },
        {
          p: "d",
          t: [0, 500],
          v: [
            "path('M-41.4,60.2L-72.7,94.5')",
            "path('M-72.7,94.5L-72.7,94.5')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      { autoremove: false }
    )
    .range(0, 2500);
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
