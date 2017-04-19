//........第一页......
 //定死input框那一页的高度
 	var conHeight = $(window).height();//获取手机设备的高度
 	
 	$('#page1 .content').height(conHeight);
 
//切换下拉框场地
$('select').on('change',function(){

	var index = this.selectedIndex;
	
	if(index > 0){
		
		var content = $('option').eq(index).html();
	}
	
	$('.myPopupDialog1 .place input').val(content);
	
	
	
})
//....返回..
$('.myPopupDialog2 .resetBg').on('tap',function(){
	
	$('.myPopupDialog2').css('display','none');
	
})
	



//下拉框的出现
$('.pageone .showSelect').on('tap', function() {
//	console.log(123);
	$('.pageone .showContent').css('display', 'block');
})

//下拉框点击，整个隐藏
$('.pageone .showContent p').on('tap', function() {
	
	$('.pageone .showContent').css('display', 'none');
})
//第一页的模态框

$('.submitBtm').tap(function() {
	
//	if($('.pageone .showContent p').hasClass('selectBg')) {
		
		$('.myPopupDialog1').show();
		
		var idCode = $('#page1 .showContent2 input').val();
	
	$('#page1 .myPopupDialog1 .placeNum input').val(idCode);
//	}
	
	var idCode = $('#page1 .showContent2 input').val();
	
	
	
	$('#page1 .myPopupDialog1 .placeNum input').val(idCode);

})

$('.cancelPhoto').tap(function() {
	
	$('.myPopupDialog').hide();
	
})

//.....第二页游戏等待页已等待时间函数....
waitTime();

function waitTime() {
	var n_sec = 0; //秒
	
	var n_min = 0; //分

	//60秒 === 1分
	//60分 === 1小时

	timer();

	function timer() {
		return setInterval(function() {
			//秒
			var str_sec = n_sec;

			//分
			var str_min = n_min;

			if(n_sec < 10) {
				str_sec = "0" + n_sec;
			}
			if(n_min < 10) {
				str_min = "0" + n_min;
			}

			var time = str_min + ":" + str_sec;

			$('#page2 .pagetwoContent2 .pagetwoContent2-idContent .waitTime').html(time);

			n_sec++;

			if(n_sec > 59) {

				n_sec = 0;

				n_min++;
			}
			if(n_min > 59) {

				n_sec = 0;

				n_min = 0;

			}

		}, 1000);
	}

}

//.........第二页排列编号....
queueNum();

function queueNum() {

	var num = 111;

	var numStr;

	if(num < 10) {

		numStr = "00" + num;
	}
	if(num >= 10 && num <= 99) {

		numStr = '0' + num;
	}
	if(num > 99) {

		numStr = num + '';

	}

	var len = $('#page2 .pagetwoContent2 .pagetwoContent2-idNum img').length;

	for(var i = 0; i < len; i++) {

		$('#page2 .pagetwoContent2 .pagetwoContent2-idNum img').eq(i).attr('src', 'images/wait1/' + numStr[i] + '.png')
	}
}

//.....第三页倒计时....

countDown();

function countDown() {
	var countTime = 30;

	var countStr = countTime + '';
//	console.log($('#page3 .countDown .countImg').css('background-image'));

	for(var i = 0; i < countStr.length; i++) {

		$('#page3 .countDown .countImg').eq(i).css('background-image','url("images/wait1/'+countStr[i]+'.png")');

	}

	var timer = setInterval(function() {

		countTime--;

		countStr = countTime + '';

		if(countTime < 10 && countTime >= 0) {

			countStr = '0' + countStr;
		}
		if(countTime <= 0) {

			clearInterval(timer);

			countDown();

		}
		var l = $('#page3 .countDown .countImg').length;

		for(var i = 0; i < l; i++) {
			
			$('#page3 .countDown .countImg').eq(i).css('background-image','url("images/wait1/'+countStr[i]+'.png")');

//			$('#page3 .countDown .countImg').eq(i).css('background','url(../images/wait1/'+countStr[i]+'.png) no-repeat center center');
		}

	}, 1000);
};

//.......第五页超时.....、

page5();

function page5() {
	var countTime = 20;
	var countStr;
	var timer = setInterval(function() {

		countTime--;

		countStr = countTime;

		if(countStr < 10) {

			countStr = '0' + countStr;

		}

		if(countTime <= 0) {

			clearInterval(timer);
		}

		$('#page5 .content-totalMinutes span').html(countStr);

	}, 1000)

}

page6();

function page6() {
	//情况1：首次参与成功加冕
	//情况2：首次未加冕玩家，再次参与成功加冕

	$('#page6 .content .photo-btm').on('tap', function() {
		$('#page18').css('display', 'block').siblings().css('display', 'none');
	});

	//	情况1：首次未加冕
	//	情况2：已加冕玩家，再次参与未成功加冕

//	$('#page7 .content-btm').on('tap', function() {
//		$('#page18').css('display', 'block').siblings().css('display', 'none');
//	})

	//	已加冕玩家，再次加冕

	$('#page10 .photo-btm').on('tap', function() {

		$('#page11').css('display', 'block').siblings().css('display', 'none');
	})

	// $('#page11 .content-btm').on('tap', function() {

	// 	$('#page12').css('display', 'block').siblings().css('display', 'none');
	// })

	//	首次未加冕玩家，再次未成功加冕

	$('#page13 .content-btm').on('tap', function() {

		$('#page14').css('display', 'block').siblings().css('display', 'none');
	})

	// $('#page14 .content-btm').on('tap', function() {

	// 	$('#page15').css('display', 'block').siblings().css('display', 'none');
	// })

	//	....loser0...
	$('#page8 .content-btm').on('tap', function() {

		$('#page19').css('display', 'block').siblings().css('display', 'none');
	})
	
//	$('#page9 .content-btm').on('tap', function() {
//
//		$('#page19').css('display', 'block').siblings().css('display', 'none');
//	})

}
// ...第十一页。。
page11();

function page11() {
	//	....点击立即分享弹窗...
	$('#page11 .content-btm').on('tap', function() {

		$('#page11 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page11 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}
//.......第12页......

page12();

function page12() {
	//	....点击立即分享弹窗...
	$('#page12 .content-btm').on('tap', function() {

		$('#page12 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page12 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}

page15();

function page15() {
	//	....点击立即分享弹窗...
	$('#page15 .content-btm').on('tap', function() {

		$('#page15 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page15 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}
page18();

function page18() {
	//	....点击立即分享弹窗...
	$('#page18 .content-btm').on('tap', function() {

		$('#page18 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page18 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}

page14();

function page14() {
	//	....点击立即分享弹窗...
	$('#page14 .content-btm').on('tap', function() {
		$('#page14 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page14 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}


page19();
function page19() {
	//	....点击立即分享弹窗...
	$('#page19 .content-btm').on('tap', function() {

		$('#page19 .popup').css('display', 'block');

	})

	//  ....点击弹窗取消分享....

	$('#page19 .popup').on('tap', function() {

		$(this).css('display', 'none')

	})
}

// window.onload = function(){
// 	video.play();
// }

var height = $('body').height();

        $(window).resize(function() {
        	
            $('#page1 .content').height(height);
            
        });

//$(document).ready(function () {
//　　$('body').height($('body')[0].clientHeight);
//});