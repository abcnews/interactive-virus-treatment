const animate = ks => { const tl = ks.animate("#Strand-1",[{p:'rotate',t:[0,1000,2000],v:[0,5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
"#Strand-2",[{p:'rotate',t:[0,1000,2000],v:[0,-5,0],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]]}],
{autoremove:false,markers:{"LoopStart":0}}).range(0,2000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;