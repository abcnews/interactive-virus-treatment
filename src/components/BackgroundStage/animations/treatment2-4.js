const animate = ks => { const tl = ks.animate("#All",[{p:'mpath',t:[0,1500],v:['0%','100%'],e:[[1,0,0,.6,1],[0]],mp:"M68.6,1572.2L715.8,856.2"},{p:'scaleX',t:[0,1500],v:[3,.6],e:[[1,0,0,.6,1],[0]]},{p:'scaleY',t:[0,1500],v:[3,.6],e:[[1,0,0,.6,1],[0]]}],
"#Cytokines",[{p:'opacity',t:[0,1500],v:[1,0],e:[[0],[0]]}],
"#_a0",[{p:'opacity',t:[500,1000],v:[0,1],e:[[0],[0]]}],
"#_a1",[{p:'rotate',t:[1000,2000,3000,4000,5000],v:[-20,-15,-20,-15,-20],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#_a2",[{p:'mpath',t:[1000,2000,3000,4000,5000],v:['0%','25%','50%','75%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],mp:"M1019.7,440.3L954.4,493.9L1019.7,440.3L954.4,493.9L1019.7,440.3"}],
"#_a3",[{p:'mpath',t:[1000,2000],v:['0%','100%'],e:[[1,.4,0,.6,1],[0]],mp:"M643.3,1129.5L1139.5,1549.8"},{p:'opacity',t:[1000,2000],v:[1,0],e:[[0],[0]]}],
"#_a4",[{p:'mpath',t:[2000,3000],v:['0%','100%'],e:[[1,.4,0,.6,1],[0]],mp:"M544.3,165.1L587.2,-116.8"},{p:'opacity',t:[2000,3000],v:[1,0],e:[[0],[0]]}],
"#_a5",[{p:'mpath',t:[1500,2500],v:['0%','100%'],e:[[1,.4,0,.6,1],[0]],mp:"M170.4,798.7L-166.3,596"},{p:'opacity',t:[1500,2500],v:[1,0],e:[[0],[0]]}],
"#_a6",[{p:'rotate',t:[1000,2000,3000,4000,5000],v:[-10,0,-10,0,-10],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#_a7",[{p:'mpath',t:[1333,2208],v:['0%','100%'],e:[[1,.4,0,.6,1],[0]],mp:"M934.4,820.7L1574.4,716.7"},{p:'opacity',t:[1333,2208],v:[1,0],e:[[0],[0]]}],
"#_a8",[{p:'rotate',t:[1000,2000,3000,4000,5000],v:[-20,-40,-20,-40,-20],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#_a9",[{p:'mpath',t:[1750,2708],v:['0%','100%'],e:[[1,.4,0,.6,1],[0]],mp:"M752.1,1274.6L996.1,1684"},{p:'opacity',t:[1750,2708],v:[1,0],e:[[0],[0]]}],
"#_a10",[{p:'mpath',t:[1000,2000,3000,4000,5000],v:['0%','25%','50%','75%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],mp:"M544.3,1548.2L567.8,1579.1L544.3,1548.2L567.8,1579.1L544.3,1548.2"}],
"#_a11",[{p:'mpath',t:[500,1500],v:['0%','100%'],e:[[0],[0]],mp:"M401.5,445.5L153.7,635.7"},{p:'opacity',t:[500,1500],v:[1,0],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":3000}}).range(0,5000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;