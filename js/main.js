requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		lb : "lunbo",
		xd : "xiding",
		lt : "louti"
	}
})
requirejs(["jquery","lb","xd","lt"],function($,lb,xd,lt){
		lb.lunbo();
		$(window).scroll(function(){
			xd.xiding();
		})
			lt.louti();
		
})
