requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		reg : "register"
	}
})
requirejs(["jquery","reg"],function($,reg){
		reg.topic();
		$(".yzm").click(){
			reg.rand();
		}
})
