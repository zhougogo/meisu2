var canvas = document.getElementById('canvas');

var ctx =canvas.getContext("2d");
var i = 0;
setInterval(function(){
	ctx.drawImage(video, 0, 0, 304, 152);

	console.log(i++);
},1000)

// context.drawImage(video, 0, 0, 330, 250);
// console.log(canvas);