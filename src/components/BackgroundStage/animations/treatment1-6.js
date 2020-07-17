const animate = function(ks) {
  const tl = ks
    .animate(
      "#All",
      [
        {
          p: "mpath",
          t: [0, 1500],
          v: ["0%", "100%"],
          e: [[0], [0]],
          mp: "M123,737.5L535,-282.5"
        },
        { p: "scaleX", t: [0, 1500], v: [1, 5], e: [[0], [0]] },
        { p: "scaleY", t: [0, 1500], v: [1, 5], e: [[0], [0]] }
      ],
      "#Body-back",
      [{ p: "opacity", t: [1000, 1500], v: [0.8, 0], e: [[0], [0]] }],
      "#_a0",
      [
        {
          p: "rotate",
          t: [0, 3000, 6000],
          v: [-516.6, -876.6, -1236.6],
          e: [[1, 0, 0, 1, 1], [1, 0, 0, 1, 1], [0]]
        }
      ],
      "#_a1",
      [
        { p: "rotate", t: [0, 2000], v: [-455, -635], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a2",
      [
        { p: "rotate", t: [0, 2000], v: [-319.9, -139.9], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a3",
      [
        { p: "rotate", t: [0, 2000], v: [-536.4, -356.4], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a4",
      [
        { p: "rotate", t: [0, 2000], v: [-250.1, -70.1], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a5",
      [
        { p: "rotate", t: [0, 2000], v: [-449, -269], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a6",
      [
        { p: "rotate", t: [0, 2000], v: [-313.1, -133.1], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a7",
      [
        { p: "rotate", t: [0, 2000], v: [-553.9, -373.9], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a8",
      [
        { p: "rotate", t: [0, 2000], v: [-369.5, -189.5], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a9",
      [
        { p: "rotate", t: [0, 2000], v: [-601.7, -781.7], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a10",
      [
        { p: "rotate", t: [0, 2000], v: [-319.5, -139.5], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a11",
      [
        { p: "rotate", t: [0, 2000], v: [-264.3, -84.3], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a12",
      [
        { p: "rotate", t: [0, 2000], v: [-360, -540], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a13",
      [
        { p: "rotate", t: [0, 2000], v: [-266.1, -86.1], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a14",
      [
        { p: "rotate", t: [0, 2000], v: [-425.9, -245.9], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a15",
      [
        { p: "rotate", t: [0, 2000], v: [-281.1, -101.1], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a16",
      [
        { p: "rotate", t: [0, 2000], v: [-402.9, -222.9], e: [[0], [0]] },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#Cell",
      [{ p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }],
      "#Nucleus",
      [
        {
          p: "mpath",
          t: [0, 1000, 2000],
          v: ["0%", "50%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]],
          mp: "M-21,76.1L-15,62.2L-21,76.1"
        }
      ],
      "#endosome",
      [
        {
          p: "rotate",
          t: [0, 1000, 2000],
          v: [-22, -19, -22],
          e: [[1, 0.4, 0, 0.6, 1], [1, 0.4, 0, 0.6, 1], [0]]
        }
      ],
      "#_a17",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M625.9,222.5L625.9,160.9"
        },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a18",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M544.6,937.4L537.8,900.3"
        },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a19",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M154.3,557.4L170.6,580.6"
        },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a20",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M747.8,437.2L776,446.7"
        },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#_a21",
      [
        {
          p: "mpath",
          t: [0, 2000],
          v: ["0%", "100%"],
          e: [[1, 0.4, 0, 0.6, 1], [0]],
          mp: "M290.6,156.1L307.9,187.6"
        },
        { p: "opacity", t: [1000, 1500], v: [1, 0], e: [[0], [0]] }
      ],
      "#Interleukin-6-2",
      [{ p: "opacity", t: [1500, 2500], v: [0, 1], e: [[0], [0]] }],
      { autoremove: false, markers: { LoopStart: 3000 } }
    )
    .range(3000, 6000)
    .time(3000);
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
