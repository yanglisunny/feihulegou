requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		lb : "lunbo",
		xd : "xiding",
		lt : "louti"
	}
})
requirejs(["jquery","lb","xd","lt"],function($,lb,xd,lt){
	//顶部二级菜单实现
	$(".top>.top1>.top1_right>.myacount").mouseenter(function(){
		$(this).find("b").css("background-position-y","-5px");
		$(this).find("ul").css("display","block");
		$(this).css("background","#fff");
	}).mouseleave(function(){
		$(this).find("b").css("background-position-y","0");
		$(this).find("ul").css("display","none");
		$(this).css("background","");
	})
	
	$(".top>.top1>.top1_right>.help").mouseenter(function(){
		$(this).find("ul").css("display","block");
		$(this).css("background","#fff");
	}).mouseleave(function(){
		$(this).find("ul").css("display","none");
		$(this).css("background","");
	})
	
	
		lb.lunbo();
		$(window).scroll(function(){
			xd.xiding();
		})
			lt.louti();
//			console.log(2);
	
	
})
