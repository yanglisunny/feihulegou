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
	$("input").focus(function(){
		$(".topic").html("");
	})
	$("form").submit(function(){
		var lname = $("#user_name").val();
		var lpwd = $("#password").val();
		var rname = JSON.parse(pub.getCookie(3)).uname;
		var rpwd = JSON.parse(pub.getCookie(3)).upwd;
		var rphone = JSON.parse(pub.getCookie(3)).uphone;
		//cookie的值
		if(rname && rpwd && rphone){
			if((lname == rname || lname == rphone) && lpwd==rpwd ){
				return true;
			}else{
				$(".topic").html("输入错误,请重新输入");
				return false;
			}
		}
		
	})
	
})