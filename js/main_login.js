requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		login : "login",
		pub : "public"
	}
})
requirejs(["jquery","login","pub"],function($,login,pub){
	$(".middle_con").find("i").click(function(){
		$(this).addClass("xxk_bt")
				.siblings()
				.removeClass("xxk_bt")
		$(".login_box>div").eq($(this).index()).css("display","block")
												.siblings()
												.css("display","none")
	})
	$(".user").delegate(".clear","click",function(){
	 	 console.log(1)
	 	 console.log($(this).prev())
		$(this).prev().val("");
		$(this).css("display","none");
	})
	$("input").focus(function(){
		$(".topic").html("");
		$(this).next().css("display","block");
	})
	$("input").blur(function(){
		if($(this).val().length==0){
			$(this).next().css("display","none");
		}
	})
	
	
	$(".clear").click(function(){
		console.log(1)
		$(this).prev().val("");
	})
	
	$(".sub").click(function(){
		var lname = $("#user_name").val();
		var lpwd = $("#password").val();
		//cookie的值
		if(document.cookie){
			var brr = pub.getCookie2();
			for(var key in brr){
				console.log(brr[key][0])
				var rname = JSON.parse(brr[key][1]).uname;
				var rpwd = JSON.parse(brr[key][1]).upwd;
				var rphone = JSON.parse(brr[key][1]).uphone;
				var rlogined = JSON.parse(brr[key][1]).logined;
				if((lname == rname || lname == rphone) && lpwd==rpwd ){
//					pub.removeCookie(brr[key]);
					console.log(document.cookie)
					var json = {
					"uname":rname,
					"upwd":rpwd,
					"uphone":rphone,
					"logined":1,
					}
						pub.setCookie(brr[key][0],JSON.stringify(json));
					location.href="index.html";
				}else{
					$(".topic").html("用户名或密码错误,请重新输入");
				}
			}
		}else{
			$(".topic").html("账号不存在");
		}
		
	})
	
})