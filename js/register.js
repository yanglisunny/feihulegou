define(["require"],function(){
	return {
		topic: function(){
			$("input").focus(function(){
//				console.log($(this).parent().html());
				$(this).parent().next().find("span").html($(this).parent().data("topic"));
			}).blur(function(){
				$(this).parent().next().find("span").html("")
			})
		},
		
		rand : function(){
			
		}
		
	}
})