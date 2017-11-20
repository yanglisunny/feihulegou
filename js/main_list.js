requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		pub : "public"
	}
})
requirejs(["jquery","pub"],function($,pub){
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
	
	//菜单收缩展开
	$('.nav-item>a').click(function(){
        if ($(this).next().css('display') == "none") {
            //未展开要展开
            $('.nav-item').children('ul').slideUp(300);//将全部关闭
            $(this).parent().siblings().animate({"height":"50px"},300)
            $(this).parent().animate({"height":$(this).parent().height()+250},300)
            $(this).next('ul').slideDown(300);//将当前的打开
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        }else{
            //收缩已展开
            $(this).next('ul').slideUp(300);
            $('.nav-item,.nav-show').removeClass('nav-show');
            $(this).parent().animate({"height":$(this).parent().height()-250},300)
        }
    });
    
	$(".zhzq_con_center .zhzq_con_CL .left_3 li").mouseover(function(){
		$(this).siblings().find(".bigshow").css("display","none");
		$(this).siblings().find(".smallshow").css("display","block");
		$(this).find(".smallshow").css("display","none");
		$(this).find(".bigshow").css("display","block");
	})
	
	$(".crxxk>.crxxk_top>li").mouseenter(function(){
		$(this).addClass("show")
				.siblings()
				.removeClass("show")
		$(".crxxk_bottom>li").eq($(this).index()).css("display","block")
							 					  .siblings().css("display","none")
	})
})


