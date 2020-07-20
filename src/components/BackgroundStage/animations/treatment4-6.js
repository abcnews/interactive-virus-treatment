const animate = ks => { const tl = ks.animate("#Strand-1",[{p:'rotate',t:[0,1000,2000,3000,4000],v:[0,5,0,5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#Strand-2",[{p:'rotate',t:[0,1000,2000,3000,4000],v:[0,-5,0,-5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#_a0",[{p:'opacity',t:[1250,2000],v:[0,1],e:[[0],[0]]}],
"#Ritonivir",[{p:'mpath',t:[0,1250],v:['0%','100%'],e:[[0],[0]],mp:"M-189.8,-203.9C-163.8,-55.9,-26.2,41.6,50.2,82.1"},{p:'rotate',t:[0,2000,4000],v:[0,360,720],e:[[0],[0],[0]]},{p:'opacity',t:[0,708],v:[0,1],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":2000}}).range(0,4000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;