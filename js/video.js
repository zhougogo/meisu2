
var video = document.getElementById('video');

var gameVi = document.getElementsByClassName('gameVideo')[0];

var gamePic = document.getElementsByClassName('gamePic')[0];

var zhezhao = document.getElementsByClassName('zhezhao')[0];



gamePic.addEventListener('touchstart',function(){
	
	video.style.display = 'block';
	
	gamePic.style.display = 'none';
	
	zhezhao.style.display = 'block';
	
	video.play();
	
	video.style.height = 'auto';

})

//if(video.pause()){
//	
//	console.log(123);
//	
//	gamePic.style.display = 'block';
//	
//	video.style.display = 'block';
//	
//}

 


// document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
//     if (ua.indexOf("iPhone") > 0) {
//         setTimeout(function(){
//             $("#bgMusic")[0].play();
//         },3000);
//     }
//     else if (ua.indexOf("Android") > 0) {
//         var vi =  $("#bgMusic");
//         vi[0].play();
//         if ( vi[0].currentTime){
//             vi[0].pause();
//             //这里的定时器你可以不需要，也可以变成你需要的事件，而且也不一定在这个位置，主要是里面的play
//             setTimeout(function(){
//                 vi[0].play();
//             },3000)
//         }
//     }
// });