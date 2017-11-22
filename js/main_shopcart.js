requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		pub : "public"
	}
})
requirejs(["jquery","pub"],function($,pub){
	$("#top").load("index.html .top");
	$("#logo").load("index.html .logo");
	$("#nav").load("index.html .navs");
	$("#bottom").load("index.html .bottom");
	
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
	}
	
	
	var arr = pub.getCookie3("prolist");//数组
	$.ajax({
			type:"get",
			url:"http://127.0.0.1/git/feihulegou/data/index.json",
			async:true,
			success : function(json){
				//从cookie中取数据添加到购物车中
				var str = "";
				var sum = 0;
				var money = 0;
				console.log(arr)
				for(var i=0;i<arr.length;i++){//每一个元素都是一个json
						console.log(arr[i].attr)
						console.log(json[arr[i].attr][arr[i].list])
					for(var j=0;j<json[arr[i].attr][arr[i].list].length;j++){
						var shopinfo=json[arr[i].attr][arr[i].list][j];
						if(shopinfo.id==arr[i].id){//找到当前的产品
							sum=sum+arr[i].count;
							money=money +  (arr[i].count * shopinfo.price);
							str+='<div class="shop-item clearfix" >'+
								'<p class="fl"><input type="checkbox" class="ck"/></p>'+
								'<img class="fl" src="img/'+ shopinfo.src +'" alt="" />'+
								'<p class="fl">'+ shopinfo.name +'</p>'+
								'<span class="fl">'+ shopinfo.price +'元</span>'+
								'<p class="fl count" '+
									'data-id="'+ shopinfo.id +'" '+
									'data-attr="'+ arr[i].attr +'" '+
									'data-price="'+ shopinfo.price +'" data-count="'+ arr[i].count +'"'+
									'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
									'>'+
									'<span class="updateCount" data-number="1">+</span>'+
									'<span class="shop-count">'+ arr[i].count +'</span>'+
									'<span class="updateCount" data-number="-1">-</span>'+
								'</p>'+
								'<em class="fl sumPrice">'+ (arr[i].count * shopinfo.price) +'元</em>'+
								'<i class="fl delBtn">删除</i>'+
							'</div>';
							continue;
						}	
					}
//					$(".count2").html(sum);
//					$(".money2").html(money);
				}
				$(".shoplist").append(str);
			}
			///添加事件
	})
	//添加删除操作
	$(".shoplist").on("click",".delBtn",function(){
		var cou = 0;
		var pid =$(this).parent().find(".count").data("id")
		var pattr =$(this).parent().find(".count").data("attr")
		for(var key in arr){
			if(pid== arr[key].id && pattr == arr[key].attr){
			cou = arr[key].count;
				console.log(arr[key].id);
				console.log(arr[key].attr);
				arr.splice(key,1);//将对应下标的值从数组中删除
				//将数据展示到页面，并写到cookie中
				$(this).parent().remove();
				pub.setCookie("prolist",JSON.stringify(arr));
				break;
			}
		}
		var oldNum =Number($(".nav_con .shopcart #Cart_num").html()) ;
		//改变购物车里面的值
		$(".nav_con .shopcart #Cart_num").html(oldNum-cou);
	})
	
	//结算
	function jiesuan(){
		var money = 0;
		var count = 0;
		$(".ck:checked").each(function(){
			money+= parseFloat($(this).parent().parent().find(".sumPrice").html());
			count+=Number($(this).parent().parent().find(".shop-count").html());
		})
		$(".money2").html(money);
		$(".count2").html(count);
	}
	$(".shoplist").on("click",".ck",function(){
		jiesuan();
	})
	
	//全选
	$("#selectAll").click(function(){
		//将所有的checkbox全部选上 
		$(".ck").prop( "checked" , $(this).prop("checked") );
		jiesuan();
	})
	
	$(".shoplist").on("click",".updateCount",function(){
		var sign = $(this).html();
		var count= Number($(this).parent().find(".shop-count").html());
		//记录当前操作的是加还是减
//		console.log($(this).parent().data("price"))
		
		for(var key in arr){
			if(arr[key].id==$(this).parent().data("id")&&arr[key].attr==$(this).parent().data("attr")){
				sign == "+" ? arr[key].count++ : (arr[key].count<=1 ? arr[key].count :arr[key].count--);
//				arr[key].count++;
				$(this).parent().find(".shop-count").html(arr[key].count)
//				console.log($(this).parent().data("price").html())
				$(this).parent().next().html(arr[key].count*(parseFloat($(this).parent().data("price")))+"元")
				jiesuan();
				//改变cookie的值
				setCookie("prolist",JSON.stringify(arr));
				break;
			}
		}
	})
	
})