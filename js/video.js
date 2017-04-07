
var video = document.getElementById('video');
document.addEventListener('touchstart',function(){
	video.play();
})



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