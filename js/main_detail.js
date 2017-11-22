requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		pub : "public"
	}
})
requirejs(["jquery","pub"],function($,pub){
	//退出
	$(".top1_left2").on("click",".out",function(){
		$(".top1_left").css("display","block");
		$(".top1_left2").css("display","none");
		var brr = pub.getCookie2();
		for(var key in brr){
			console.log(brr[key][0])
			var rname = JSON.parse(brr[key][1]).uname;
			var rpwd = JSON.parse(brr[key][1]).upwd;
			var rphone = JSON.parse(brr[key][1]).uphone;
			var rlogined = JSON.parse(brr[key][1]).logined;
		var json = {
					"uname":rname,
					"upwd":rpwd,
					"uphone":rphone,
					"logined":0,
					}
		pub.setCookie(brr[key][0],JSON.stringify(json));
		}
		
	})
	window.onload=function(){
		if(document.cookie){
			var sum = 0;
		var oldCookie = pub.getCookie3("prolist");
			//如果cookie中没有数据 直接push 
		var arr=oldCookie;
		//再次点击商品时  判断这个商品在原cookie中是否存在  如果存在就将数量++
		for( var i = 0 ; i < arr.length ; i++ ){
				sum += arr[i].count;
		}
		$(".nav_con .shopcart #Cart_num").html(sum);
			var brr = pub.getCookie2();
			for(var key in brr){
				var rname = JSON.parse(brr[key][1]).uname;
				var rlogined = JSON.parse(brr[key][1]).logined;
				if(rlogined== 1){
					$(".top1_left").css("display","none");
					$(".top1_left2").css("display","block");
					$(".uname").html(rname);
					$(".top1_left2").css({"color":"#333","font-size":"14px","font-family":"Microsoft Yahei"});
					break;
				}
			}
		}
		//判断数据是什么根据地址栏的数据来判断
		var urlstr = location.href;
	 			//如果路径没有参数   ？   就说明没有传递数据
		if( urlstr.indexOf( "?" ) == -1){
			return;
		}
		urlstr = urlstr.split("?")[1];//"pid=shop01&cname=classify001"
		var arrs = urlstr.split("&");
		var pid = arrs[0].split("=")[1];
		var pname = arrs[1].split("=")[1];
		var posit = arrs[2].split("=")[1];
	 		//请求ajax  获取数据  根据cname确定要遍历的数组
	 		//  根据pid 确定要显示的数组中哪一个商品的详情
	 		$.ajax({
	 			type:"get",
	 			url:"http://127.0.0.1/git/feihulegou/data/index.json",
	 			async:true,
	 			success : function(json){
	 				var html = "";
	 				//确定操作的数组  json[cname].list
	 				for( var i = 0 ; i < json[pname][posit].length ; i++ ){
	 					var pro = json[pname][posit][i];//每一个商品
	 					if( pro.id == pid ){
	 						html = `<img src="img/${pro.src}" alt="" id = "smallImg" />`;
							$(".zhzq_con_top>.pname").html(pro.name);
							$(".zhzq_con_top>.topic").html(json[pname].name);
							$(".fdjR_name>.topic").html(pro.name);
							$(".fdjR_price .price").html(pro.price)
							break;
	 					}
	 				}
	 				$("#imgm").html( html );
	 			}
	 		})
	 		
	 		//获取详情页的json
	 		$.ajax({
	 			type:"get",
	 			url:"http://127.0.0.1/git/feihulegou/data/details.json",
	 			async:true,
	 			success : function(json){
	 				var html1 = "";
	 				var html2 = "";
	 				var smallImgSrc = [];
	 				//确定操作的数组  json[cname].list
	 				for( var i = 0 ; i < json[pname].small.length ; i++ ){
	 					var pro = json[pname].small[i];//每一个商品
	 					if( pro.id == pid ){
	 						smallImgSrc=pro.src;
	 						
	 						for(var j=0;j<json[pname].small[i].src.length;j++){
	 							var pro_src= json[pname].small[i].src;
		 						html1 += `<img src="img/${pro_src[j]}"  class="imgss"/>`
	 						}
							break;
	 					}
	 				}
	 				
	 				$(".simgs").html( html1 );
	 				
	 				var bigImgSrc = [];
	 				var middleImgSrc =[];
	 				
//	 				console.log(smallImgSrc )
					//判断id的匹配
					for( var i = 0 ; i < json[pname].big.length ; i++ ){
	 					var pro = json[pname].big[i];//每一个商品
	 					if( pro.id == pid ){
	 						bigImgSrc = pro.src;
	 						html2 = `<img src="img/${smallImgSrc[0]}" alt="" id="bigImg"/>`;
	 						break;
	 					}
	 				}
					$("#big").html(html2);
					for( var i = 0 ; i < json[pname].middle.length ; i++ ){
	 					var pro = json[pname].middle[i];//每一个商品
	 					if( pro.id == pid ){
	 						middleImgSrc = pro.src;
	 						break;
	 					}
	 				}
					
						
				//小图换页
				var ht = "";
				var count=0;
				$("#sImg>.Rbtn").click(function(){
					if(smallImgSrc.length-count<=4){
						count=-4;
					}
					count+=4;
					ht="";
					for(var i=count;i< ((count+4)>smallImgSrc.length ?smallImgSrc.length : (count+4 ));i++){
						ht += `<img src="img/${smallImgSrc[i]}"    class="imgss"/>`
					}
					$(".simgs").html( ht );
				})
				$("#sImg>.Lbtn").click(function(){
					if(smallImgSrc.length-count<=4){
						count=-4;
					}
					count+=4;
					ht="";
					for(var i=count;i< ((count+4)>smallImgSrc.length ?smallImgSrc.length : (count+4 ));i++){
						ht += `<img src="img/${smallImgSrc[i]}"  class="imgss"/>`
					}
					$(".simgs").html( ht );
					
				})
					
				//切换图片
				$(".simgs").on("mouseover",".imgss",function(){
							$(this).css("border","1px solid #b40005");
							$("#imgm>img").attr("src","img/"+middleImgSrc[count+$(this).index()])
							$("#big>img").attr("src","img/"+bigImgSrc[count+$(this).index()])
				}).on("mouseout",".imgss",function(){
					$(this).css("border","1px solid #eaeaea");
				})
				
	 			}
	 			
	 		})
	 		
				var num = 0;
	 		//加入购物车
			$(".fdjR_gwc .joinshop").click(function(){
				var addNum= Number($(".calculate .and").val());
				var oldNum =Number($(".nav_con .shopcart #Cart_num").html()) ;
				//改变购物车里面的值
				$(".nav_con .shopcart #Cart_num").html(addNum+oldNum);
				//修改cookie
				var arr = [];
				var flag = true;//如果值为真 就像arr中push商品
				var datajson = {
					id : pid,
					attr :pname,
					list : posit,
					count : addNum
				}
				//再次点击时   商品会被覆盖    可以先将cookie中的数据取出来  存入到arr中
				var oldCookie = pub.getCookie3("prolist");
				//如果cookie中没有数据 直接push 
				if( oldCookie.length != 0 ){
					arr=oldCookie;
					//再次点击商品时  判断这个商品在原cookie中是否存在  如果存在就将数量++
					for( var i = 0 ; i < arr.length ; i++ ){
						
						if( datajson.id == arr[i].id && datajson.attr == arr[i].attr){
							arr[i].count++;
							flag = false;
							break;
						}
					}
				}
				if( flag ){//如果值为真 就像arr中push商品
					arr.push( datajson );
				}
				//将数组信息存入到cookie
				pub.setCookie( "prolist", JSON.stringify(arr) );
			})
	 }
	
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
	
	//加减按钮
	var res = 1;
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
	
	//选项卡
	$(".crxxk>.crxxk_top>li").mouseenter(function(){
		$(this).addClass("show")
				.siblings()
				.removeClass("show")
		$(".crxxk_bottom>li").eq($(this).index()).css("display","block")
							 					  .siblings().css("display","none")
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
	
	
})

 