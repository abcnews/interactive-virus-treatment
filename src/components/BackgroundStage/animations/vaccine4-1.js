const animate = function(ks) {
  const tl = ks
    .animate(
      "#Coronavirus",
      [
        {
          p: "rotate",
          t: [0, 1000, 2000, 3000],
          v: [-2, 0, -2, 0],
          e: [[1, 0.4, 0, 1, 1], [1, 0, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      { autoremove: false, markers: { LoopStart: 1000 } }
    )
    .range(0, 3000);
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
