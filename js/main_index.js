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
		//ajax请求数据
		
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/git/feihulegou/data/index.json",
		async:true,
		success : function(json){
			var conStr1 = "";
			var conStr2 = "";
			var conStr3 = "";
			var conStr4 = "";
			for(var attr in json){
				if(json[attr].name=="手机数码"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti1 .Lleft").html(conStr3);
					$(".Louti1 .Louti_bottom ul").html(conStr4);
					$(".Louti1 .Lright").html(conStr1);
					$(".Louti1 .Lcenter").html(conStr2);
				}
				if(json[attr].name=="鞋服配饰"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"> <img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti2 .Lleft").html(conStr3);
					$(".Louti2 .Louti_bottom ul").html(conStr4);
					$(".Louti2 .Lcenter").html(conStr2);
					$(".Louti2 .Lright").html(conStr1);
				}
				if(json[attr].name=="家用电器"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti3 .Lleft").html(conStr3);
					$(".Louti3 .Louti_bottom ul").html(conStr4);
					$(".Louti3 .Lcenter").html(conStr2);
					$(".Louti3 .Lright").html(conStr1);
				}
				if(json[attr].name=="家居生活"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti4 .Lleft").html(conStr3);
					$(".Louti4 .Louti_bottom ul").html(conStr4);
					$(".Louti4 .Lcenter").html(conStr2);
					$(".Louti4 .Lright").html(conStr1);
				}
				if(json[attr].name=="母婴玩具"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img" data-id="${product.id}">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti5 .Lleft").html(conStr3);
					$(".Louti5 .Louti_bottom ul").html(conStr4);
					$(".Louti5 .Lcenter").html(conStr2);
					$(".Louti5 .Lright").html(conStr1);
				}
				if(json[attr].name=="运动户外"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti6 .Lleft").html(conStr3);
					$(".Louti6 .Louti_bottom ul").html(conStr4);
					$(".Louti6 .Lcenter").html(conStr2);
					$(".Louti6 .Lright").html(conStr1);
				}
				if(json[attr].name=="个护美妆"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti7 .Lleft").html(conStr3);
					$(".Louti7 .Louti_bottom ul").html(conStr4);
					$(".Louti7 .Lcenter").html(conStr2);
					$(".Louti7 .Lright").html(conStr1);
				}
				if(json[attr].name=="食品保健"){
					conStr1="";
					conStr2="";
					conStr3="";
					conStr4 = "";
					for( var j = 0 ; j < json[attr].list3.length ; j++ ){
						var product = json[attr].list3[j];//一个商品对象
						conStr1 += `<div class="Lright1">
						<div class="Lright1_img">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>
						</div>
						<div class="Lright1_name">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.name}</a>
						</div>
						<div class="Lright1_price">
							<a href="details.html?pid=${product.id}&cname=${attr}&position=list3" data-id="${product.id}">${product.price}</a>
						</div>
					</div>`
					}
					for( var j = 0 ; j < json[attr].list2.length ; j++ ){
						var product = json[attr].list2[j];//一个商品对象
						conStr2 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list2" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a>`
					}
					for( var j = 0 ; j < json[attr].list4.length ; j++ ){
						var product = json[attr].list4[j];//一个商品对象
						conStr4 += `<li><a href="details.html?pid=${product.id}&cname=${attr}&position=list4" data-id="${product.id}"><img src="img/${product.src}" alt="" /></a></li>`
					}
					for( var j = 0 ; j < json[attr].list1.length ; j++ ){
						var product = json[attr].list1[j];//一个商品对象
						conStr3 += `<a href="details.html?pid=${product.id}&cname=${attr}&position=list1" data-id="${product.id}">
							<img src="img/${product.src}" alt="" />
						</a>`
					}
					$(".Louti8 .Lleft").html(conStr3);
					$(".Louti8 .Louti_bottom ul").html(conStr4);
					$(".Louti8 .Lcenter").html(conStr2);
					$(".Louti8 .Lright").html(conStr1);
				}
				
			}
			
			
		}
			
//				$(".nav").html( title );
//				$(".shoplist").html( conStr );
			
	})
}
})
	
