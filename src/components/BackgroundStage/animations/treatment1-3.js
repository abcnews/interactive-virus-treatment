const animate = ks => { const tl = ks.animate("#Coronavirus",[{p:'opacity',t:[0,500],v:[1,.3],e:[[1,0,0,.6,1],[0]]},{p:'filter',t:[0,500],v:['saturate(1)','saturate(0)'],e:[[0],[0]]}],
"#Spike-protein-text",[{p:'opacity',t:[750,1250],v:[0,1],e:[[0],[0]]}],
"#Spike-protein-label-path",[{p:'opacity',t:[500,542],v:[0,1],e:[[0],[0]]},{p:'d',t:[500,1000],v:["path('M-72.7,94.5L-72.7,94.5')","path('M-41.4,60.2L-72.7,94.5')"],e:[[1,0,0,.6,1],[0]]}],
"#Coronavirus-label",[{p:'opacity',t:[0,500],v:[1,0],e:[[0],[0]]}],
{autoremove:false}).range(0,1250);
if(document.location.search.substr(1).split('&').indexOf('global=paused')>=0)ks.globalPause() ; return tl; }; module.exports = animate;