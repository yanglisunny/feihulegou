requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		pub : "public"
	}
})
requirejs(["jquery","pub"],function($,pub){
	var flag= true;
	//打开城市选择
	$(".stock_mr").click(function(){
		flag=false;
		if($(".stock_mc").css("display")=="none"){
//			$(".stock_mc").css("display","block");
			$(".stock_mc").css({"display":"block"})
			$(this).css({"border-color":"#7b470e","border-bottom-color":"#fff"});
			$(this).find("em").css("background-positionX","-150px");
		}else{
			$(".stock_mc").css("display","none");
			$(this).css({"border-color":"#ddd"});
			$(this).find("em").css("background-positionX","-120px");
			flag=true;
		}
	}).mouseenter(function(){
		if(flag){
			$(this).css({"border":"1px solid #7b470e"})
			$(this).find("em").css("background-positionX","-135px")
		}
	}).mouseleave(function(){
		if(flag){
			$(this).css({"border":"1px solid #ddd"})
			$(this).find("em").css("background-positionX","-120px")
		}
	})
	//选择城市
	$(".stock_list>dd>span").click(function(){
		$(".stock_mr").find("span").html($(this).html());
		$(".stock_mc").css({"display":"none"})
		$(".stock_mr").css({"border-color":"#ddd"})
		$(".stock_mr").find("em").css("background-positionX","-120px")
		flag=true;
	})
	//关闭按钮
	$(".stock_list>p>.close").click(function(){
		$(".stock_mc").css({"display":"none"})
		$(".stock_mr").css({"border-color":"#ddd"})
		$(".stock_mr").find("em").css("background-positionX","-120px")
		flag=true;
	})
	
	var res = 1;
	//加减按钮
	$(".fdjR_gwc>.calculate>.sub").click(function(){
		res = Number($(this).next().val());
		if(res==1){
			res=1;
		}else{
			res-=1;
		}
		$(this).next().val(res);
	})
	
	$(".fdjR_gwc>.calculate>.add").click(function(){
		res = Number($(this).prev().val());
		res+=1;
		$(this).prev().val(res);
	})
	//放大镜
	$("#middle").mouseenter(function(){
		$("#big").css("display","block");
		$("#mask").css("display","block");
	}).mousemove(function(e){
		//让mask跟随鼠标移动
		//1.记录鼠标应该在mask的位置
		var e = event || e;
		var x = e.pageX - $(this).offset().left -$("#mask").width()/2;
		var y = e.pageY - $(this).offset().top -$("#mask").height()/2;
		//边界处理
		x = x<0 ? 0 : (x>($(this).width()-$("#mask").width())? ($(this).width()-$("#mask").width()) : x);
		y = y<0 ? 0 : (y>($(this).height()-$("#mask").height())? ($(this).height()-$("#mask").height()) : y);
		//2.修改mask的位置
		$("#mask").css("left",x);
		$("#mask").css("top",y);
		//修改大图显示区  寻找比例关系
		var lef = $("#bigImg").width()*x/$("#middle").width();
		var to = $("#bigImg").height()*y/$("#middle").height();
		$("#bigImg").css("left",-lef);
		$("#bigImg").css("top",-to);
	}).mouseleave(function(){
		$("#big").css("display","none");
		$("#mask").css("display","none");
	})
	var simgFlag=true;
	//切换图片
	$("#sImg>img").mouseover(function(){
			$(this).css("border","1px solid #b40005");
			console.log($(this).index())
			$("#middle>img").attr("src","img/details/"+$(this).index()+"m.jpg")
			$("#big>img").attr("src","img/details/"+$(this).index()+"b.jpg")
	}).mouseout(function(){
		$(this).css("border","1px solid #eaeaea");
	})
	var page = Math.ceil((($("#sImg>img").outerWidth())*5)/$("#sImg").width());
	var count = 1;
$(".crxxk>.crxxk_top>li").mouseenter(function(){
		$(this).addClass("show")
				.siblings()
				.removeClass("show")
		$(".crxxk_bottom>li").eq($(this).index()).css("display","block")
							 					  .siblings().css("display","none")
	})

	//加入购物车
})

 