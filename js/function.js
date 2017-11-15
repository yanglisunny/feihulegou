define(["require"],function(){
	return {
		lunbo : function(){
			var index = 0;
			var timer = setInterval(autoplay,1500);
			function autoplay(){
				$(".img-list > li").eq(index++).fadeOut(1000);
				if(index==5){
					index=0;
				}
				//修改号码显示
				$(".banner-nav-list>li").eq(index).toggleClass("active");
				$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
				$(".img-list > li").eq(index).fadeIn(1000);
			}
		
			$(".banner").mouseover(function(){//鼠标移入，显示箭头
					$(".arr").css("opacity",.6);
					clearInterval(timer);
				})
				//点击箭头
			$(".banner").mouseout(function(){//鼠标移入，显示箭头
				$(".arr").css("opacity",0);
				timer = setInterval(autoplay,1500)
			})
			
			$(".toLeft").click(function(){
				$(".img-list > li").eq(index--).fadeOut(1000);
				if(index==-1){
					index=4;
				}
				$(".banner-nav-list>li").eq(index).toggleClass("active");
				$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
				$(".img-list > li").eq(index).fadeIn(1000);
				
			})
			
			$(".toRight").click(function(){
				$(".img-list > li").eq(index++).fadeOut(1000);
				if(index==5){
					index=0;
				}
				$(".banner-nav-list>li").eq(index).toggleClass("active");
				$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
				$(".img-list > li").eq(index).fadeIn(1000);
				
			})
			$(".banner-nav-list>li").click(function(){
				$(".img-list > li").eq(index).fadeOut(1000);
				index=$(this).index();
				$(".img-list > li").eq(index).fadeIn(1000);
				$(".banner-nav-list>li").eq(index).toggleClass("active");
				$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
			})
		},
		xiding : function(){
			
		}
	}
})



