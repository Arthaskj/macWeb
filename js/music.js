window.onload=function(){
	var but=document.getElementsByClassName("logo")[0];
	var myMusic=document.getElementById("myMusic");
	var txt=document.getElementById("txt");
	var con=document.getElementsByClassName("content")[0];
	var bbt=true;
	
	
	
	but.onclick=function(){
		if (bbt)
		{
			this.className += " rot";
			myMusic.play();
			bbt=false;
		}else{
			this.className =" logo";
			myMusic.pause();
			bbt=true;		
		}	
	}
		var lrc=txt.value;
		var lrcarr=lrc.split("[");
		var html="";
		for(var i=0;i<lrcarr.length;i++){

			var arr=lrcarr[i].split("]");
			var time=arr[0].split(":");
			var ms=time[0]*60+time[1]*1;
			var text=arr[1];
			console.log(text);
			if (text) {
				html +="<p id="+ms+">"+text+"</p>";
			}
			con.innerHTML=html;
	}
	var num=0;
	var op=con.getElementsByTagName("p");
	myMusic.addEventListener("timeupdate",function(){
		var curTime=parseInt(this.currentTime);
		if (document.getElementById(curTime)) {
			for (var i = 0; i <op.length; i++ ){
				op[i].style.cssText="color:#ccc;font-size:16px"
			}
			document.getElementById(curTime).style.cssText="color:red;font-size:18px;";
			if (op[5+num].id==curTime) {
				con.style.top=-20*num+"px";
				num++;
				if (num==lrcarr.length) {
				con.style.top="0px";
				this.className =" logo";
			}
			}

		}
	})


}
