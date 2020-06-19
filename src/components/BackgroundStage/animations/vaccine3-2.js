const animate = function(ks) {
  const tl = ks
    .animate(
      "#Internals-2",
      [{ p: "opacity", t: [0, 1000], v: [0, 1], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#oldStrandA",
      [{ p: "opacity", t: [1042, 1083], v: [1, 0], e: [[0], [0]] }],
      "#Spikes-to-fade",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#newStrandA",
      [
        {
          p: "mpath",
          t: [2000, 3000, 4500, 5500],
          v: ["0%", "48.4%", "48.4%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [0]],
          mp: "M277.7,265.1L403.4,314.1L403.4,314.1L535,372"
        },
        {
          p: "rotate",
          t: [2000, 3000, 4500, 5500],
          v: [0, 30, 30, 60],
          e: [[1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [1, 0, 0, 0.6, 1], [0]]
        },
        {
          p: "opacity",
          t: [1000, 1042, 4500, 5500],
          v: [0, 1, 1, 0],
          e: [[0], [0], [0], [0]]
        }
      ],
      { autoremove: false }
    )
    .range(0, 5500);
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
