const animate = ks => { const tl = ks.animate("#nucleus-2",[{p:'mpath',t:[0,1000,2000,3000,4000,5000],v:['0%','51.5%','63.6%','75.7%','87.9%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],mp:"M-67.4,-10L-5.2,1.3L-20,2.9L-5.2,1.3L-20,2.9L-5.2,1.3"}],
"#_a0",[{p:'opacity',t:[1500,2500],v:[0,1],e:[[0],[0]]}],
{autoremove:false,markers:{"LoopStart":3000}}).range(0,5000);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;