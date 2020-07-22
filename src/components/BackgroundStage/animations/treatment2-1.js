const animate = ks => { const tl = ks.animate("#_a0",[{p:'rotate',t:[0,2000],v:[595,235],e:[[0],[0]]}],
"#_a1",[{p:'rotate',t:[0,2000],v:[-1616.4,-1256.4],e:[[0],[0]]}],
"#_a2",[{p:'rotate',t:[0,2000],v:[-1330.1,-970.1],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":0}}).range(0,2000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;