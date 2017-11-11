window.onload=function(){
	var li=kj("icon");
	var apple=kj("#apple");
	var applelogo=kj("#applelogo");
	var applet=true;
	
	applelogo.onclick=function(){
		if(applet){
		apple.style.display="block";
		applet=false;
	}
		else{
			apple.style.display="none";
		applet=true;
		}
	}
	
 $('body').bind('click', function(event) {
    var evt = event.srcElement ? event.srcElement : event.target;    
    if(evt.id == 'apple' ||  evt.id == 'applelogo') return; // 如果是元素本身，则返回
    else {
        $('#apple').hide(); // 如不是则隐藏元素
		applet=true;
    }   
});

	
	//强制退出界面
	$(".exitnow").click(function(){
		$(".exitnownode").css("display" ,"block");
		
	});
	$(".exitnownodeyes").click(function(){
		$(".shutdown").css("display" ,"block");
		$(".exitnownode").css("display" ,"none");
		setTimeout(function(){$(".waiting").css("display","none");$(".shutdown").css("opacity","1");$(".shutdown  span:nth-child(1)").css("display","none");},3000);
	});
	$(".exitnownodeno").click(function(){
		$(".exitnownode").css("display" ,"none");
	});
	
	
	//关于本机弹出动画
	$(".aboutli:nth-child(3)").click(function(){
		$("#about").css("display","none");
	});
	var aboutli2=true;
	$(".aboutli:nth-child(2)").click(function(){
		
		if(aboutli2){
			$("#about").css("width","1280px").css("height","678px").css("top","0").css("right","0");
			$(".aboutbg img").css("display","block");
			$("#about span").css("display","block");
			aboutli2=false;
		}else {
			$("#about").css("width","700px").css("height","500px").css("top","0").css("right","0");
			$(".aboutbg img").css("display","block");
			$("#about span").css("display","block");
			aboutli2=true;
		}
	});
	
	$(".aboutli:nth-child(1)").click(function(){
		$("#about").css("width","80px").css("height","20px").css("top","90%").css("right","88%");
		$(".aboutbg img").css("display","none");
		$("#about span").css("display","none");
	});
	
	$(".aboutbut").click(function(){
		$("#about").css("display","block");
		$("#apple").css("display","none");
	});
	
	//开机界面
	$(".startimg").click(function(){
		$(".startbar").css("opacity","1");
		$(this).animate({top:'-230px'});
		setTimeout(function(){$(".startbar2").css("width","250px")},1000);
		setTimeout(function(){$(".startlogo").css("display","none");$(".sleep").css("display","block");},6000);
		setTimeout(function(){$(this).css("top","0");$(".startbar").css("opacity","0");$(".startbar2").css("width","0")},6000);
		
	});
		
	//关机界面
	$("#shutdown").click(function(){
		$(".shutdown").css("display","block");
		setTimeout(function(){$(".waiting").css("display","none");$(".shutdown").css("opacity","1");$(".shutdown  span:nth-child(1)").css("display","none");},3000);
		
	});
		
	//重启操作
	$("#rst").click(function(){
		$(".startlogo").css("display","block ");
	});
		
	//进入休眠模式
	$(".sleepimg").click(function(){
		$(this).css("right","280px");
		$(".sleepbox").css("display","block");
	});
	
	
	var sleepbox3=document.getElementsByClassName("sleepbox3")[0];
	var sleepbox2=document.getElementsByClassName("sleepbox2");
	
	var sleep=document.getElementsByClassName("sleep")[0];
	
	//用户登录界面
	sleepbox3.onclick=function(){
		if(sleepbox2[0].value=="123" && sleepbox2[1].value=="123"){
			sleep.style.display="none";
			$(".barbg").css("display","block");
			setTimeout(function(){$(".sleepimg").css("right","0");$(".sleepbox").css("display","none");sleepbox2[0].value="";sleepbox2[1].value=""},1000);
		}
		else{
			alert("请按规定输入");
		}
	}
	
	$("#sleep").click(function(){
		$(".sleep").css("display","block")
	});
		
	$("#systemper,#systemper2 ").hover(function(){
			$("#systemper2").css("display","block");
		
	},function(){
			$("#systemper2").css("display","none");
			
	});
	
	$("#historypro,#historypro2").hover(function(){
		
			$("#historypro2").css("display","block");
			
	},function(){
			$("#historypro2").css("display","none");
			
	});

	$("body1 *").not("#applelogo").click(function(){
			$("#apple").css("display","none");
	});
		
		
	//底层菜单栏动画
	$(".icon:nth-child(1)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(2)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(3)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(1)").mouseout(function(){
		$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(3)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(2)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(3),.icon:nth-child(1)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(4)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(2)").mouseout(function(){
		$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(3)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(4),.icon:nth-child(2)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(1),.icon:nth-child(5)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(3)").mouseout(function(){
		$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(4)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(3),.icon:nth-child(5)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(2),.icon:nth-child(6)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(4)").mouseout(function(){
		$( ".icon:nth-child(6),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(5)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(4),.icon:nth-child(6)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(3),.icon:nth-child(7)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(5)").mouseout(function(){
		$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(6)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(5),.icon:nth-child(7)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(4),.icon:nth-child(8)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(6)").mouseout(function(){
		$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(4),.icon:nth-child(8),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(7)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(6),.icon:nth-child(8)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(5),.icon:nth-child(9)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(7)").mouseout(function(){
		$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(8)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(7),.icon:nth-child(9)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(6),.icon:nth-child(10)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(8)").mouseout(function(){
		$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(9)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(8),.icon:nth-child(10)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(7)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(9)").mouseout(function(){
		$( ".icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	});
	$(".icon:nth-child(10)").mouseover(function(){
		$(this).css("marginTop","30px").css("transform","scale(1.7)");
		$(".icon:nth-child(9)").css("marginTop","40px").css("transform","scale(1.4)");
		$(".icon:nth-child(8)").css("marginTop","55px").css("transform","scale(1.3)");
	});
	$(".icon:nth-child(10)").mouseout(function(){
		$( ".icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	});
			
			
		
		
	
}
