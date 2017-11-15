define(["require"],function(){
	return {
		louti : function(){
			var flag=true;
			
			$(window).scroll(function(){
				if(true){
					var sTop = $(document).scrollTop();
					if(sTop>=($(".Louti").eq(0).offset().top-$(window).height())){
						$("#LoutiNav").css("display","block");
					}else{
						$("#LoutiNav").css("display","none");
						return;
					}
					$(".Louti").each(function(){
						if($(this).offset().top-sTop<$(this).height()/2 ){
							console.log($(this).index())
							$("#LoutiNav>ul>li").eq($(this).index()).addClass("las")
																	.siblings()
																	.removeClass("las")
						}
					})
				}
				
			})
				//点击
				$("#LoutiNav>ul>li:not('.last')").click(function(){
					flag=false;
					$(this).addClass("las")
							.siblings()
							.removeClass("las")
					$("html,body").animate({"scrollTop":($(".Louti").eq($(this).index()).offset().top)},1000,function(){
						flag=true;
					})
				})
				
				$(".last").click(function(){
					flag=false;
					$("html,body").animate({"scrollTop":0},1000,function(){
						flag=true;
					})
				})
			
		}
	}
})



