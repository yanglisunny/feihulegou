define(["require"],function(){
	return {
		rand : function(min,max){
			return Math.round( Math.random()*(max-min) + min );
		},
		
		getYzm :function(){
			var arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','j','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			return arr[this.rand(0,35)];
		},
		pwdLevel : function (str){
			var regNum = /\d+/;//包含数字
		  	var regLetter = /[a-z]+/i;//包含字母
		  	var regChar = /[\W_]+/; //包含特殊字符
		  	
		  	var num = regNum.test(str) ? 1 : 0 ;
		  	var letter = regLetter.test(str) ? 1 : 0 ;
		  	var chars = regChar.test(str) ? 1 : 0 ;
		  	return num+letter+chars;
		}
		
		
	}
})