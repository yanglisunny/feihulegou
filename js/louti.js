define(["require"],function(){
	return {
		louti : function(){
			var flag=true;
			var index=0;
			$(window).scroll(function(){
					var sTop = $(document).scrollTop();
					if(sTop>=($(".Louti").eq(0).offset().top-$(window).height())){
						$("#LoutiNav").css("display","block");
					}else{
						$("#LoutiNav").css("display","none");
						return;
					}
					$(".Louti").each(function(){
						if($(this).offset().top-sTop<$(this).height()/2 ){
							index=$(this).index();
							$("#LoutiNav>ul>li").eq($(this).index()).addClass("las")
																	.siblings()
																	.removeClass("las")
						
					}
				})
				})
				
				$("#LoutiNav>ul").on("click","li:not('.last')",function(){
					$(this).addClass("las")
							.siblings()
							.removeClass("las")
					$("html,body").animate({"scrollTop":($(".Louti").eq($(this).index()).offset().top)},1000)
				}).on("mouseenter","li:not('.last')",function(){
					$(this).addClass("las")
				}).on("mouseleave","li",function(){
					$(this).removeClass("las")
					$("#LoutiNav>ul>li").eq(index).addClass("las");
				})
				
				$(".last").click(function(){
					$("#LoutiNav>ul>li:not('.last')").removeClass("las");
					$("html,body").animate({"scrollTop":0},1000)
				})
			
		}
	}
})



