const animate = ks => { const tl = ks.animate("#Strand-1",[{p:'rotate',t:[0,1000,2000,3000,4000],v:[0,5,0,5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#Strand-2",[{p:'rotate',t:[0,1000,2000,3000,4000],v:[0,-5,0,-5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#_a0",[{p:'opacity',t:[1250,2000],v:[0,1],e:[[0],[0]]}],
"#Ritonivir",[{p:'mpath',t:[0,1250],v:['0%','100%'],e:[[1,0,0,.6,1],[0]],mp:"M-154.9,-163.9C-136.3,-63.4,-26.2,-78.4,50.2,-37.9"},{p:'rotate',t:[0,2000,4000],v:[0,360,720],e:[[0],[0],[0]]},{p:'opacity',t:[0,708],v:[0,1],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":2000}}).range(0,4000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;