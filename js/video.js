
var video = document.getElementById('video');

var gameVi = document.getElementsByClassName('gameVideo')[0];

var gamePic = document.getElementsByClassName('gamePic')[0];

var zhezhao = document.getElementsByClassName('zhezhao')[0];

var page = document.getElementById('page2');

console.log(page);



gamePic.addEventListener('touchstart',function(){
	
	video.style.display = 'block';
	
	gamePic.style.display = 'none';
	
//	zhezhao.style.display = 'block';
	
	video.play();
	
	video.style.height = 'auto';

});

page.addEventListener('touchmove',function(){
	
	video.style.display = 'none';
	
	gamePic.style.display = 'block';
	
	console.log(123);
	
})

