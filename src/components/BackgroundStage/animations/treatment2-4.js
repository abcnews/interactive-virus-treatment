const animate = ks => { const tl = ks.animate("#_a0",[{p:'rotate',t:[0,2000,4000],v:[-1475,-1835,-2195],e:[[0],[0],[0]]}],
"#_a1",[{p:'rotate',t:[0,2000,4000],v:[829.9,1189.9,1549.9],e:[[0],[0],[0]]}],
"#_a2",[{p:'rotate',t:[0,2000,4000],v:[-1889,-2249,-2609],e:[[0],[0],[0]]}],
"#_a3",[{p:'rotate',t:[0,2000,4000],v:[-1608.6,-1968.6,-2328.6],e:[[0],[0],[0]]}],
"#_a4",[{p:'rotate',t:[0,2000,4000],v:[-1538.6,-1898.6,-2258.6],e:[[0],[0],[0]]}],
"#_a5",[{p:'rotate',t:[0,2000,4000],v:[-1587.9,-1947.9,-2307.9],e:[[0],[0],[0]]}],
"#_a6",[{p:'rotate',t:[0,2000,4000],v:[631,991,1351],e:[[0],[0],[0]]}],
"#Tocilizumab",[{p:'mpath',t:[0,1000],v:['0%','100%'],e:[[1,0,0,.6,1],[0]],mp:"M470.2,187.2L508.2,210.7"},{p:'rotate',t:[0,1000],v:[-872,-1052],e:[[1,0,0,.6,1],[0]]}],
"#_a7",[{p:'opacity',t:[0,500],v:[1,0],e:[[0],[0]]}],
"#_a8",[{p:'mpath',t:[2000,3000,4000],v:['0%','54.3%','100%'],e:[[0],[1,0,0,.6,1],[0]],mp:"M401.5,120.2L496.7,208.2L389.2,225.6"},{p:'rotate',t:[2000,3000,4000],v:[-1889,-2249,-2609],e:[[0],[0],[0]]},{p:'opacity',t:[2000,2500,3500,4000],v:[0,1,1,0],e:[[0],[0],[0],[0]]}],
{autoremove:false,markers:{"LoopStart":2000}}).range(0,4000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;