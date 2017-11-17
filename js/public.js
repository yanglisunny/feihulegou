define(["require"],function(){
	return {
		setCookie : function(key,value,day){
			if( day>0 ){
				var d = new Date();
				d.setDate( d.getDate() +day );
				document.cookie = key + "=" + value + ";expires=" + d;
			}else{
				document.cookie = key + "=" + value;
			}
		},
		
		getCookie :function(key){
			if( document.cookie ){//如果有cookie
				var str = document.cookie;
				var arr = str.split("; ");
				for( var i = 0 ; i < arr.length ; i++ ){
					var item = arr[i].split("=");
					if( item[0]==key ){
						return item[1];//找到了 key对应的值
					}
				}
				//如果cookie中没有key  找不到对应的值
				return "";
			}
	//如果没有cookie   
			return "";
		},
		removeCookie : function (key){
			setCookie(key,"",-1);
		},
		getCookieNum : function(){
			if( document.cookie ){//如果有cookie
				var str = document.cookie;
				var arr = str.split("; ");
				return arr.length;
			}
		}
	}
})