define(["require"],function(){
	return {
		xiding : function(){
				var h = 130;
				var sTop = $(document).scrollTop();
				console.log(sTop);
				if(sTop>h){
					$(".navs").css({"position":"fixed","top":0,"z-index":9999})
				}else{
					$(".navs").css("position","");
				}
			}
		}
})



