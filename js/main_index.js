requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		index : "index",
		pub : "public"
	}
})
requirejs(["jquery","index","pub"],function($,index,pub){
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
	
	
		index.lunbo();
		$(window).scroll(function(){
			index.xiding();
		})
			index.louti();
			index.daojishi();
		window.onload=function(){
			
			if(document.cookie){
				var s = JSON.parse(pub.getCookie(3)).uname;
				$(".top1_left").css("display","none");
				$(".top1_left2").html(s+" 您好,欢迎登录飞虎乐购");
				$(".top1_left2").css({"color":"#333","font-size":"14px","font-family":"Microsoft Yahei"});
			}
		/*$("#main img").mouseenter(function(){
			console.log(1)
			$(this).css("width","120%")
		}).mouseleave(function(){
			$(this).css("width","100%")
		})*/
		
	}
		
		
})
