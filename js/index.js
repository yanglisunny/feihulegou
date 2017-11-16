define(["require"],function(){
	return {
		daojishi : function(){
			var now = new Date();//当前时间
			    var isjx=0;
			    function GetServerTime(){
			            var d= now.getYear()+"/"+now.getMonth()+"/"+now.getDate()+" 10:00:00";//设置每天的16.:30 为节点
			            var urodz = new Date(d); 
			            now.setTime(now.getTime()+250); 
			            days = (urodz - now) / 1000 / 60 / 60 / 24; 
			            daysRound = Math.floor(days); 
			            hours = (urodz - now) / 1000 / 60 / 60 - (24 * daysRound); 
			            hoursRound = Math.floor(hours); 
			            minutes = (urodz - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			            minutesRound = Math.floor(minutes); 
			            seconds = (urodz - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			            secondsRound = Math.round(seconds);          
			            if((hoursRound==0 && minutesRound==0 && secondsRound==0)){//都等于0 说明过了16:30
			                isjx=1;
			            }
			                if(hoursRound < 10)    
			   					hoursRound = "0" + hoursRound; 
			   				if(minutesRound < 10)    
			
			   					minutesRound = "0" + minutesRound; 
			    			if(secondsRound < 10)    
			
			   					secondsRound = "0" + secondsRound; 
			            //判断今天还是明天
			            if(isjx==0 && (parseFloat(now.toTimeString().substr(0,2)+ now.toTimeString().substr(3,3).substr(0,2)+now.toTimeString().substr(6,7) )<=162959)){
			               $(".sp1").html (hoursRound + "：" + minutesRound + "：" + secondsRound ) ; 
			            }else  {
			                 $(".sp1").html (hoursRound + "：" + minutesRound + "：" + secondsRound );
			            }
			    }
			   setInterval(GetServerTime,250);
			   },
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
			
		},
		
		lunbo : function(){
			var index = 0;
			var timer = setInterval(autoplay,1500);
			var flag = true;
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
				if(flag){
					flag=false;
					$(".img-list > li").eq(index--).fadeOut(1000);
					if(index==-1){
						index=4;
					}
					$(".banner-nav-list>li").eq(index).toggleClass("active");
					$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
					$(".img-list > li").eq(index).fadeIn(1000,function(){
						flag=true;
					});
				}
				
			})
			
			$(".toRight").click(function(){
				if(flag){
					flag=false;
					$(".img-list > li").eq(index++).fadeOut(1000);
					if(index==5){
						index=0;
					}
					$(".banner-nav-list>li").eq(index).toggleClass("active");
					$(".banner-nav-list>li").eq(index).siblings().removeClass("active");
					$(".img-list > li").eq(index).fadeIn(1000,function(){
						flag=true;
					});
				}
				
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
				var h = 130;
				var sTop = $(document).scrollTop();
				if(sTop>h){
					$(".navs").css({"position":"fixed","top":0,"z-index":9999})
				}else{
					$(".navs").css("position","");
				}
			}
	}
})