const animate = ks => { const tl = ks.animate("#All",[{p:'mpath',t:[0,1000],v:['0%','100%'],e:[[1,0,0,.6,1],[0]],mp:"M68.5,1572.2L159.2,1728.2"}],
"#_a0",[{p:'rotate',t:[0,2000,4000],v:[-755,-1115,-1475],e:[[0],[0],[0]]}],
"#_a1",[{p:'rotate',t:[0,2000,4000],v:[-176.4,183.6,543.6],e:[[0],[0],[0]]}],
"#_a2",[{p:'rotate',t:[0,2000,4000],v:[109.9,469.9,829.9],e:[[0],[0],[0]]}],
"#_a3",[{p:'rotate',t:[0,2000,4000],v:[-1169,-1529,-1889],e:[[0],[0],[0]]}],
"#_a4",[{p:'rotate',t:[0,2000,4000],v:[-888.6,-1248.6,-1608.6],e:[[0],[0],[0]]}],
"#_a5",[{p:'rotate',t:[0,2000,4000],v:[-818.6,-1178.6,-1538.6],e:[[0],[0],[0]]}],
"#_a6",[{p:'rotate',t:[0,2000,4000],v:[-867.9,-1227.9,-1587.9],e:[[0],[0],[0]]}],
"#_a7",[{p:'rotate',t:[0,2000,4000],v:[-89,271,631],e:[[0],[0],[0]]}],
"#_a8",[{p:'rotate',t:[0,2000,4000],v:[-89,271,631],e:[[0],[0],[0]]}],
"#Tocilizumab",[{p:'mpath',t:[0,1500],v:['0%','100%'],e:[[1,0,0,.6,1],[0]],mp:"M394.2,132C414.5,158.1,440.4,178.9,470.2,187.2"},{p:'rotate',t:[0,2000,4000],v:[-152,-512,-872],e:[[0],[0],[0]]},{p:'opacity',t:[0,500],v:[0,1],e:[[0],[0]]}],
"#_a9",[{p:'opacity',t:[1292,2000],v:[0,1],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":2000}}).range(0,4000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;