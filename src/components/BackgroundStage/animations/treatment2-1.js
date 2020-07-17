const animate = function(ks) {
  const tl = ks
    .animate(
      "#All",
      [
        {
          p: "mpath",
          t: [0, 1500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M715.8,856.2L68.6,1572.2"
        },
        { p: "scaleX", t: [0, 1500], v: [0.6, 3], e: [[1, 0, 0, 0.6, 1], [0]] },
        { p: "scaleY", t: [0, 1500], v: [0.6, 3], e: [[1, 0, 0, 0.6, 1], [0]] }
      ],
      "#Cytokines",
      [{ p: "opacity", t: [0, 1500], v: [0, 1], e: [[0], [0]] }],
      "#_a0",
      [
        {
          p: "rotate",
          t: [0, 1500, 3500, 5500, 7500, 9500],
          v: [595, 325, -35, -395, -755, -1115],
          e: [[0], [0], [0], [0], [0], [0]]
        }
      ],
      "#_a1",
      [
        {
          p: "rotate",
          t: [0, 1500, 3500, 5500, 7500, 9500],
          v: [-1616.4, -1256.4, -896.4, -536.4, -176.4, 183.6],
          e: [[0], [0], [0], [0], [0], [0]]
        }
      ],
      "#_a2",
      [
        {
          p: "rotate",
          t: [0, 1500, 3500, 5500, 7500, 9500],
          v: [-1330.1, -970.1, -610.1, -250.1, 109.9, 469.9],
          e: [[0], [0], [0], [0], [0], [0]]
        }
      ],
      "#_a3",
      [
        {
          p: "rotate",
          t: [0, 1500, 3500, 5500, 7500, 9500],
          v: [541, 271, -89, -449, -809, -1169],
          e: [[0], [0], [0], [0], [0], [0]]
        }
      ],
      "#_a4",
      [{ p: "opacity", t: [4500, 4583], v: [0, 1], e: [[0], [0]] }],
      "#_a5",
      [
        {
          p: "mpath",
          t: [4500, 6500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M11.6,11.7L-79.7,22.8"
        },
        {
          p: "rotate",
          t: [4500, 5500, 7500, 9500],
          v: [-348.6, -528.6, -888.6, -1248.6],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a6",
      [
        {
          p: "mpath",
          t: [4500, 6500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M11.6,11.7L-49.1,105.9"
        },
        {
          p: "rotate",
          t: [4500, 5458, 7500, 9500],
          v: [-278.6, -458.6, -818.6, -1178.6],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a7",
      [
        {
          p: "mpath",
          t: [4500, 6500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M11.6,11.7L-176.4,56.3"
        },
        {
          p: "rotate",
          t: [4500, 5500, 7500, 9500],
          v: [-327.9, -507.9, -867.9, -1227.9],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a8",
      [
        {
          p: "mpath",
          t: [4500, 6500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M11.6,11.7L-158.2,-68.8"
        },
        {
          p: "rotate",
          t: [4500, 5500, 7500, 9500],
          v: [-629, -449, -89, 271],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a9",
      [
        {
          p: "mpath",
          t: [4500, 6500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M11.6,11.7L76.4,174.6"
        },
        {
          p: "rotate",
          t: [4500, 5500, 7500, 9500],
          v: [-629, -449, -89, 271],
          e: [[0], [0], [0], [0]]
        }
      ],
      "#_a10",
      [{ p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }],
      "#_a11",
      [
        {
          p: "mpath",
          t: [6000, 7500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M375.1,472.6L401.5,445.5"
        }
      ],
      "#_a12",
      [
        {
          p: "mpath",
          t: [1500, 3500],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M426,350.5C464.9,335.8,485.4,358.6,526.6,320.2"
        },
        {
          p: "rotate",
          t: [500, 3500],
          v: [-876.6, -696.6],
          e: [[1, 0.6, 0.1, 0.7, 0.5], [0]]
        },
        { p: "opacity", t: [1500, 3000], v: [0, 1], e: [[0], [0]] }
      ],
      { autoremove: false, markers: { LoopStart: 7500 } }
    )
    .range(7500, 9500)
    .time(7500);
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
