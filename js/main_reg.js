requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		reg : "register",
		public : "public"
	}
})
requirejs(["jquery","reg","public"],function($,reg,pub){
	var focusflag = true;
	//提示信息
		$("input").focus(function(){
			if(focusflag){
				$(this).parent().next().find("span").html($(this).parent().data("topic"));
			}
		}).blur(function(){
				$(this).parent().next().find("span").html("");
		})
		//获取验证码
		$(".yzm>txt").click(function(){
			var randphoneNum = [];//随机的手机验证码
			for(var i =0;i<4;i++){
				randphoneNum.push(reg.getYzm());
			}
			$(this).html(randphoneNum.join(" "));
			
			$(this).parent().attr("data-num",randphoneNum.join(""));
		})
		var flag_yzm=true;
		//手机验证码倒计时
		$(".phone_yzm>button").click(function(){
			if(flag_yzm){
				flag_yzm=false;
				var index=60;
				var randphoneNum = [];//随机的手机验证码
				for(var i =0;i<6;i++){
					randphoneNum.push(reg.rand(0,9));
				}
				$(this).parent().attr("data-num",randphoneNum.join(""));//将验证码保存到标签上
				var phone_y= setInterval(function(){
					$(this).html(index+"s");
					index--;
					if(index==-1){
						clearInterval(phone_y);
						$(this).html("获取验证码");
						flag_yzm=true;
					}
				}.bind(this),1000)
			}
		})
		
		console.log(document.cookie)
		//验证注册是否正确
		$("form").submit(function(){
			if(usernameFlag && userpwdFlag && userrepwdFlag && phoneflag && yamflag && yamphoneflag){
				//保存用户的用户名，密码，手机号
				var uname = $(".username>input").val();
				var upwd = $(".pwd>input").val();
				var uphone = $(".phone>input").val();
				var json = {
					"uname":uname,
					"upwd":upwd,
					"uphone":uphone,
					"logined":0
				}
				if(document.cookie){
					pub.setCookie(pub.getCookieNum()+1,JSON.stringify(json));
				}else{
					pub.setCookie("1",JSON.stringify(json));
				}
				return true;
			}else{
				alert("检查验证码或者手机验证码是否错误")
				return false;
			}
		})
		//用户名验证
		var usernameFlag = null;
		$(".username>input").blur(function(){
			//支持中文、字母、数字、“-”“_”的组合，4-20个字符
			var regular = /^([\u4E00-\u9FA5\uF900-\uFA2D]|[A-Za-z0-9-_]){4,20}$/;
			var txt = $(".username").find("input").val();
			if(document.cookie){
				console.log(document.cookie)
				var brr = pub.getCookie2();
				for(var key in brr){
					var rname = JSON.parse(brr[key][1]).uname;
					if(rname==txt){
						$(".username").next().find("span").html("用户名已存在");
						$(".username").find("i").css("display","none");
						$(".username").next().find("span").css("color","red");
						$(".username").css("border-color","red");
						usernameFlag=false;
						return;
					}
				}
			}
			if(regular.test(txt)){
				$(".username").find("i").css("display","block");
				$(".username").next().find("span").css("color","#e2d5cc");
				$(".username").css("border-color","#ddd");
				usernameFlag=true;
			}else{
				$(".username").find("i").css("display","none");
				$(".username").next().find("span").css("color","red");
				$(".username").css("border-color","red");
				usernameFlag=false;
			}
		})
		//密码验证
		var userpwdFlag = null;
		$(".pwd>input").keydown(function(){
			//建议使用字母、数字和符号两种及以上的组合，6-20个字符
			focusflag=false;
			var regular = /^.{6,20}$/;
			var txt = $(".pwd").find("input").val();
			$(".pwd").next().find("i").removeClass("tip_strong");
			$(".pwd").next().find("i").removeClass("tip_middle");
			$(".pwd").next().find("i").removeClass("tip_low");
			if(regular.test(txt) && txt){
				$(".pwd").find("i").css("display","block");
				$(".pwd").css("border-color","#ddd");
				$(".pwd").next().find("span").css("color","#e2d5cc");
//				$(".pwd").css("border-color","red");
				userpwdFlag=true;
				if(reg.pwdLevel(txt)==1){
					$(".pwd").next().find("span").html("密码等级弱");
					$(".pwd").next().find("i").addClass("tip_low");
				}
				if(reg.pwdLevel(txt)==2){
					$(".pwd").next().find("span").html("密码等级中");
					$(".pwd").next().find("i").addClass("tip_middle");
				}
				if(reg.pwdLevel(txt)==3){
					$(".pwd").next().find("span").html("密码等级强");
					$(".pwd").next().find("i").addClass("tip_strong");
				}
				
			}else{
				$(".pwd").find("i").css("display","none");
				$(".pwd").next().find("span").css("color","red");
				$(".pwd").css("border-color","red");
				$(this).parent().next().find("span").html($(this).parent().data("topic"));
				userpwdFlag=false;
				focusflag=true;
			}
		})
		//密码再次验证
		var userrepwdFlag = null;
		$(".repwd>input").blur(function(){
			focusflag=false;
			if($(".pwd>input").val() == $(".repwd>input").val() && $(".repwd>input").val()){
				$(".repwd").find("i").css("display","block");
				$(".repwd").next().find("span").css("color","green");
				$(".repwd").next().find("span").html("密码一致")
				userrepwdFlag=true;
			}else{
				if(!$(".repwd>input").val()){
					$(".repwd").next().find("span").html("密码不能为空");
					$(".repwd").next().find("span").css("color","red");
					return;
				}
				$(".repwd").next().find("span").css("color","red");
				$(".repwd").next().find("span").html("密码不一致")
				userrepwdFlag=false;
				focusflag=true;
			}
		})
		
		//号码验证
		var phoneflag=null;
		$(".phone>input").blur(function(){
			focusflag=false;
			var  tag =/^(15|13|18)\d{9}$/;//手机号： 15  13  18 开头
			var txt = $(".phone>input").val();
			if(document.cookie){
				var brr = pub.getCookie2();
				for(var key in brr){
					var rphone = JSON.parse(brr[key][1]).uphone;
					if(rphone==txt){
						$(".phone").next().find("span").html("手机号已绑定");
//						$(".phone").find("i").css("display","none");
						$(".phone").next().find("span").css("color","red");
						$(".phone").css("border-color","red");
						phoneflag=false;
						return;
					}
				}
			}
			if(tag.test(txt)){
				$(".phone").find("i").css("display","block");
				$(".phone").next().find("span").css("color","#e2d5cc");
				$(".phone").css("border-color","#ddd");
				phoneflag=true;
			}else{
				$(".phone").find("i").css("display","none");
				$(".phone").next().find("span").css("color","red");
				$(".phone").css("border-color","red");
				phoneflag=false;
				focusflag=true;
			}
		})
		
		//验证码验证
		var yamflag = null;
		$(".yzm>input").change(function(){
			var txt = $(this).val();
			if( txt == $(".yzm").attr("data-num")){
				yamflag=true;
			}else{
				yamflag=false;
			}
		})
		
		//手机验证码验证
		var yamphoneflag = null;
		$(".phone_yzm>input").change(function(){
			var txt = $(this).val();
			if( txt == $(".phone_yzm").attr("data-num")){
				yamphoneflag=true;
			}else{
				yamphoneflag=false;
			}
		})
})


