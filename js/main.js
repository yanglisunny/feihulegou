requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		fun : "function"
	}
})
requirejs(["jquery","fun"],function($,fun){
		fun.lunbo();
		fun.xiding();
})
