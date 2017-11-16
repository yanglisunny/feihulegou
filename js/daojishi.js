define(["require"],function(){
	return {
		daojishi : function(){
			var now = new Date();//当前时间
			    var isjx=0;
			    function GetServerTime(){
			            var d= now.getYear()+"/"+now.getMonth()+"/"+now.getDate()+" 10:00:00";//设置每天的16.:30 为节点
			            var urodz = new Date(d); 
			            now.setTime(now.getTime()+250); 
			            days = (urodz - now) / 1000 / 60 / 60 / 24; 
			            daysRound = Math.floor(days); 
			            hours = (urodz - now) / 1000 / 60 / 60 - (24 * daysRound); 
			            hoursRound = Math.floor(hours); 
			            minutes = (urodz - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
			            minutesRound = Math.floor(minutes); 
			            seconds = (urodz - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
			            secondsRound = Math.round(seconds);          
			            if((hoursRound==0 && minutesRound==0 && secondsRound==0)){//都等于0 说明过了16:30
			                isjx=1;
			            }
			                if(hoursRound < 10)    
			   					hoursRound = "0" + hoursRound; 
			   				if(minutesRound < 10)    
			
			   					minutesRound = "0" + minutesRound; 
			    			if(secondsRound < 10)    
			
			   					secondsRound = "0" + secondsRound; 
			            //判断今天还是明天
			            if(isjx==0 && (parseFloat(now.toTimeString().substr(0,2)+ now.toTimeString().substr(3,3).substr(0,2)+now.toTimeString().substr(6,7) )<=162959)){
			               $(".sp1").html (hoursRound + "：" + minutesRound + "：" + secondsRound ) ; 
			            }else  {
			                 $(".sp1").html (hoursRound + "：" + minutesRound + "：" + secondsRound );
			            }
			    }
			   setInterval(GetServerTime,250);
			   }
		}
	})