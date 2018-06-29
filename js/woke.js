//菜单栏
$('#menu_toggle').click(function(){
	$('.menufix').addClass('shownav');
})
$('.mclose').click(function(){
	$('.menufix').removeClass('shownav');
})



//关于沃克*****************

var	isMobile = false,
mobile = false,
w_width;
	function pageBox(){
	    w_width = $(window).width();
	    w_height = $(window).height();
	//设置移动端参数
	    if (w_width <= 1024) {
	        isMobile = true;
	    } else if (w_width > 1024) {
	        isMobile = false;
	    };
		//区分手机端和平板
	    if (w_width <= 640) {
	        mobile = true;
	    } else if (w_width > 640) {
	        mobile = false;
	    }
	}
	pageBox();
	$(window).resize(function () {
	    pageBox();
	})

//关于沃克
var heinow=$('.footer').outerHeight()+4*w_height;
var $wrap = $('.wrapper'), 
pages = $('.page').length, 
scrolling = false, 
currentPage = 1,
$navPanel = $('.nav-panel'), 
$scrollBtn = $('.scroll-btn'),
$navBtn = $('.nav-btn');
//关于沃克  的左侧固定导航
function manageClasses() {
	$wrap.addClass('active-page' + currentPage);
	$navBtn.removeClass('active');
	$('.nav-btn.nav-page' + currentPage).addClass('active');
	$navPanel.addClass('invisible');
	scrolling = true;
	setTimeout(function () {
		$navPanel.removeClass('invisible');
		scrolling = false;
	}, 1000);
}
$(window).resize(function () {
  if(!isMobile){
     $('.page,.wrapper,.pagebg img').css('height',w_height);
  }
  if (currentPage == 1){
	  $('.side_btn_ul').removeClass('in');
  }else{
	  $('.side_btn_ul').addClass('in');
  }
  $wrap.animate({ 'top': -(currentPage-1)*w_height}, 1000);
});
if(!isMobile){
 $('.page,.wrapper,.pagebg img').css('height',w_height);
}
function navigateUp() {
	if (currentPage > 1) {
		currentPage--;
		manageClasses();
		$wrap.animate({ 'top': -(currentPage-1)*w_height }, 1000);
		$('.side_btn_ul').addClass('in');
	}
	if (currentPage == 1){
		$('.side_btn_ul').removeClass('in');
	}
}
function navigateDown() {
	if (currentPage < pages) {
		currentPage++;
		manageClasses();
		if(currentPage==6){
			var hnum=jQuery(".footer-box").innerHeight();
			$wrap.animate({ 'top': (-4*w_height)-hnum }, 500);
			$('.side_btn_ul').removeClass('in');
		}else{
			$wrap.animate({ 'top': -(currentPage-1)*w_height }, 1000);
			$('.side_btn_ul').addClass('in');
		}
	}
}

$(document).on('mousewheel DOMMouseScroll', function (e) {
	if (!scrolling&&!isMobile) {
		if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	}
});
$(document).on('click', '.scroll-btn', function () {
	if ($(this).hasClass('up')) {
		navigateUp();
	} else {
		navigateDown();
	}
});
$(document).on('click', '.nav-btn:not(.active)', function () {
	if (!scrolling&&!isMobile) {
		$(this).addClass('active').siblings().removeClass('active');
	    var target = $(this).attr('data-target');
		$wrap.animate({ 'top': '-' + (target - 1) * 100 + '%' }, 800);
	  }
});
$(".page1 .bannerdown").click(function(){
	navigateDown();
});
function setScroll1(anchorCur){
	var $wrap = $('.wrapper');
	if(!isMobile){
		currentPage=hash;
	    $wrap.addClass('active-page' + currentPage);
		$wrap.animate({ 'top': -(currentPage-1)*w_height }, 800);
		$('.side_btn_ul').addClass('in');
		$('.side_btn_ul li').eq(currentPage-1).addClass('active').siblings().removeClass('active');
	}
};

//沃克家居主页
//nav导航栏
$(function(){
	$('.banner .bannerdown').click(function(){
		console.log($('.banner').height());
		$('html,body').animate({scrollTop:$(window).height()},500);
	});
//	动画效果
	$(".brandimg i").animate({"height":"100%","opacity":"1"},800);
	$('.ptext').addClass('articleShow');
	$(window).scroll(function(){
	var scrolling=false;
//		主页滑动到相应位置出现相应的信息标题(左侧)
//	在浏览器的滚动条大于1时也就是滚动一像素的距离 并且浏览器宽度小与1024时PC端的消失,平板和手机端的顶部导航条显示,
		if($(window).scrollTop()>1&&document.documentElement.clientWidth<1024){
			$('.header-box').addClass('scroll');
		}
		if($(window).scrollTop()<1){
			$('.header-box').removeClass('scroll');
		}
		if($(window).scrollTop()>200){
			$('.woodbg').addClass('articleShow');
		}
		if($(window).scrollTop()>500){
			$('.product-list').addClass('articleShow');
			$('.side_btn_ul').addClass('in');
		}
		if($(window).scrollTop()<=550){
			$('.flexbo').removeClass('on');
			$('.commoned').removeClass('on');
			$('.side_btn_ul').removeClass('in');
		}
		if($(window).scrollTop()>550){
			$('.flexbo').addClass('on');
			$('.commoned:eq(0)').addClass('on').siblings().removeClass('on');
		}
		if($(window).scrollTop()>900){
			$('.commoned:eq(1)').addClass('on').siblings().removeClass('on');
		}
		if($(window).scrollTop()>=1500){
			$('.commoned:eq(2)').addClass('on').siblings().removeClass('on');
		}
		if($(window).scrollTop()>=2000){
			$('.commoned').removeClass('on');
		}
		//沃克家居-关于沃克滚动事件
	})
	
//	菜单栏显示和隐藏
	$('#menu_toggle1').toggle(function(){
		$(this).addClass('active');
		$('.menubox').fadeIn('slow');
	},
	function(){
		$(this).removeClass('active');
		$('.menubox').fadeOut('slow');
	})
//banner部分、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
    var $conlist = $('.conlist li')
	var $pic = $('.bannerbox li');
	var $next = $('.flex-nav-next .flex-next');
	var $prev = $('.flex-nav-prev .flex-prev');
	var $dot = $('.content .muble .num .defaul');
	var index = 0;
	var num=1;
	var length = $pic.length;
   	var timer;
	function autopaly(){
		timer = setInterval(function(){
		    next();
		},4000)
	}
	autopaly();
	function stop(){
	    clearInterval(timer);
	}
	function prev(){
		index--;
		index = index<0 ? length-1:index;
		num=index+1;
		play();
	}
	function next(){
		index++;
		index = index>5 ? 0:index;
		num=index+1;
		play();
	}
	function play(){
		$pic.eq(index).addClass('imgIn').siblings().removeClass('imgIn');
		$conlist.eq(index).addClass('on').siblings().removeClass('on');
		$dot.eq(0).text(num);
	}
	$prev.click(function () { 
		stop();
		prev();
    })  
    $next.click(function () {
    	stop();
    	next();
    }) 
    $('.banner').mouseenter(function(){
    	stop();
    }).mouseleave(function(){
    	autopaly();
    })
    
    //沃克家居---沃克服务--信息轮播切换fufufufu
	$list=$('.store-menu .store-list');//每张信息
	$nuble=$('.page-wr .nuble');//页数按钮
    var fuindex = 0;
	function pre(){
		fuindex--;
		fuindex = fuindex<0 ? 0:fuindex;
		$list.eq(fuindex).fadeIn('fast').siblings().fadeOut('fast');
		fuplay();
	}
	function nex(){
		fuindex++;
		fuindex = fuindex>3 ? 3:fuindex;
		$list.eq(fuindex).fadeIn('fast').siblings().fadeOut('fast');
		fuplay();
	}
	function fuplay(){
		$nuble.eq(fuindex).addClass('non').siblings().removeClass('non');
	}
	//首页按钮
	$('.homes').click(function(){
		$(this).addClass('non').siblings().removeClass('non');
		$list.eq(0).fadeIn('fast').siblings().fadeOut('fast');
	})
	//尾页按钮
	$('.last').click(function(){
		$(this).addClass('non').siblings().removeClass('non');
		$list.eq(3).fadeIn('fast').siblings().fadeOut('fast');
	})
	//1234页
	$nuble.click(function(){
		$(this).addClass('non').siblings().removeClass('non');
		$list.eq($(this).index()-2).fadeIn('fast').siblings().fadeOut('fast');
	})
	$('.page-wr .pre').click(function () { 
		pre();
    })  
    $('.page-wr .nex').click(function () {
    	nex();
    }) 
    
    //沃克家居-人力资源-顶部图片
	$(window).scroll (function(){
		$('.pbanner figure img').css({"transform": "translate(0px,"+document.documentElement.scrollTop+"px)"})
	})
})



//沃克家居——沃克服务——地址的json获取
var honor = document.getElementsByClassName("honor-list")[0];
$.ajax({
	type:"get",
	url:"index.json",
	async:true,
	success:function(data){
		for(var i in data.storeList){
			$('.store-list li b').eq(i).text(data.storeList[i].b);
			$('.store-list li .store-text .ad').eq(i).text(data.storeList[i].text);
			$('.store-list li .store-text .name').eq(i).text(data.storeList[i].txt);
			$('.store-list li .store-text i').eq(i).text(data.storeList[i].num);
		}
		//沃克家具-关于沃克-奖牌
		for(var i in data.honor){
			$(".honor-list li img").eq(i).attr("src",data.honor[i].img);
			$(".honor-list li img").eq(i).attr("alt",data.honor[i].alt);
		}
	}
})
