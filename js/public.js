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
		getCookie3 :function(key){
		if(document.cookie){		
		var cookieInfo = document.cookie;
		//cookie中可能会包含一些 额外的数据，这些数据特点是由   分号和空格间隔的
		//所以 先将 分号和空格  替换掉   替换成  ;
		var arr = cookieInfo.replace(/;\s/g,';').split(";");	//  split(" ;")
		for(var i=0;i<arr.length;i++){
			item = arr[i].split("=");
			if(item[0] == key){
				brr = item[1];
				return JSON.parse(brr);//如果找到 我们想要的键，将值转成数组返回 
			}
		}
		//如果cookie中 没有我们想获取的键值，直接返回一个空数组
		return [];
	}
	//如果cookie中没有数据，直接返回一个空数组
	return [];
		},
		getCookie2 :function(){
			if( document.cookie ){//如果有cookie
				var str = document.cookie;
				var arr = str.split("; ");
				var brr = [];
				for( var i = 0 ; i < arr.length ; i++ ){
					brr.push( arr[i].split("="));
				}
						return brr;
			}
	//如果没有cookie   
			return "";
		},
		removeCookie : function (key){
			this.setCookie(key,"",-1);
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