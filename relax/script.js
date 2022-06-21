
var playBtn = document.querySelector("#playBtn");
var stopBtn = document.querySelector("#stopBtn");
var volBtn = document.querySelector("#volBtn")

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#D8D9D7',
    progressColor: '#D97823',
    barWidth: 2,
    height:90,
    responsive:true,
    hideScrollbar:true,
    
});

wavesurfer.load('./song/ChuvaFloresta.mp3');

playBtn.addEventListener("click", function(){
    wavesurfer.playPause();
});

stopBtn.addEventListener("click", function(){
    wavesurfer.stop();
})

volBtn.addEventListener("click",function(){
    wavesurfer.toggleMute();
})


var playBtn1 = document.querySelector("#playBtn1")
var stopBtn1 = document.querySelector("#stopBtn1")
var volBtn1 = document.querySelector("#volBtn1")

var wavesurfer2 = WaveSurfer.create({
    container: '#waveform-2',
    waveColor: '#D8D9D7',
    progressColor: '#D97823',
    barWidth: 2,
    height:90,
    responsive:true,
    hideScrollbar:true,
    
});


wavesurfer2.load('./song/fogo01.mp3');

playBtn1.addEventListener("click", function(){
    wavesurfer2.playPause();
});

stopBtn1.addEventListener("click", function(){
    wavesurfer2.stop();
})

volBtn1.addEventListener("click",function(){
    wavesurfer2.toggleMute();
})