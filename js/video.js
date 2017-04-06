var canvas = document.getElementById('canvas');
var video = document.getElementById('video');
var ctx =canvas.getContext("2d");

video.addEventListener('play', function() {
    setInterval(function(){
    	ctx.drawImage(video, 0, 0, 304, 152);
    },1000);
},true);


