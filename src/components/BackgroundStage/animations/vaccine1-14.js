const animate = ks => {
  const tl = ks
    .animate(
      "#All",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M579.3,1073.7L715.8,856.2"
        },
        { p: "scaleX", t: [0, 2000], v: [1, 0.6], e: [[1, 0, 0, 0.6, 1], [0]] },
        { p: "scaleY", t: [0, 2000], v: [1, 0.6], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#B-and-T-swarm",
      [{ p: "opacity", t: [0, 1000], v: [0, 1], e: [[0], [0]] }],
      "#_a0",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M1236.2,280.3L1301.5,225.4L1236.2,280.3L1301.5,225.4"
        }
      ],
      "#_a1",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M809,33.5L826.1,-49.8L809,33.5L826.1,-49.8"
        },
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [0, 30, 0, 30],
          e: [
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
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M475.5,595.5L452.2,583.8L475.5,595.5L452.2,583.8"
        }
      ],
      "#_a3",
      [
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [0, -10, 0, -10],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ]
        }
      ],
      "#_a4",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "74.1%", "87%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]],
          mp: "M1419.9,445.7L1216.2,605.8L1195.4,646L1216.2,605.8"
        }
      ],
      "#_a5",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M125.9,115.7L605.9,229.4"
        },
        {
          p: "rotate",
          t: [0, 2000, 4000, 6000],
          v: [-20, -40, -20, -40],
          e: [
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ]
        }
      ],
      "#_a6",
      [
        {
          p: "mpath",
          t: [0, 2000, 4000, 6000],
          v: ["0%", "33.3%", "66.7%", "100%"],
          e: [
            [1, 0.6, 0.1, 0.7, 0.5],
            [1, 0.4, 0, 0.6, 1],
            [1, 0.4, 0, 0.6, 1],
            [0]
          ],
          mp: "M782.1,1283.2L826.1,1333.3L782.1,1283.2L826.1,1333.3"
        }
      ],
      { autoremove: false, markers: { LoopStart: 2000 } }
    )
    .range(0, 6000);
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
