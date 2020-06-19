const animate = function(ks) {
  const tl = ks
    .animate(
      "#_a0",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.6, 0.1, 0.7, 0.5], [0]],
          mp: "M231.7,504.5C-51.5,384.9,-316.6,399.5,-544.3,693.6"
        },
        { p: "opacity", t: [1000, 2000], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a1",
      [
        {
          p: "rotate",
          t: [0, 1000, 2000, 3000, 4000],
          v: [0, 4, 0, 4, 0],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ]
        }
      ],
      "#_a2",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.6, 0.1, 0.7, 0.5], [0]],
          mp: "M533.8,429C542.1,166.8,665.6,-5.7,869.8,-75"
        },
        { p: "opacity", t: [1000, 2000], v: [1, 0], e: [[0], [0]] }
      ],
      "#Nucleus",
      [
        {
          p: "mpath",
          t: [0, 1000, 2000, 3000, 4000],
          v: ["0%", "25%", "50%", "75%", "100%"],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [0],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M216.9,229.3L228.7,215.4L216.9,229.3L228.7,215.4L216.9,229.3"
        }
      ],
      { autoremove: false, markers: { LoopStart: 2000 } }
    )
    .range(0, 4000);
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
