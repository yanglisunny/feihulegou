$(function(){
	$('.nav-item>a').click(function(){
        if (!$('.nav').hasClass('nav-mini')) {//展开
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);//将全部关闭
                $(this).next('ul').slideDown(300);//将当前的打开
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item,.nav-show').removeClass('nav-show');
            }
        }
    });
   /* //nav-mini切换
    $('#mini').click(function(){
        if (!$('.nav').hasClass('nav-mini')) {
        	//若是展开的，则要关闭，则将所有的二级标题关闭
            $('.nav-item,.nav-show').removeClass('nav-show');
     	   	$('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });*/
	});