
        var oImgli =kj("#imgli");
        var oImg = kj("img");
        var oNum = kj(".num");
        var oIpt = kj("input");
        var arrimg = new Array("a","ag","a",".a",".a");
        var num = 0;
 
 // 轮播图
var timer=setInterval(timeChange,3000);

oImg[0].onmouseover=function(){
    clearInterval(timer);
}
oImg[0].onmouseout=function(){  
    timer=setInterval(timeChange,3000);
}

function timeChange(){
    change();
}

var imgNum=0;

function change(){
    if(num<arrimg.length-1){
        num++;
        // oImg[0].src=arrimg[num];
        for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
            if(i==num){
                oNum[num].style.background="#ccc";
            }
        }
        imgNum=num*300;
        oImgli.style.left="-"+imgNum+"px";
        
    }else{
        num=0;
        // oImg[0].src=arrimg[num];
        for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
            if(i==num){
                oNum[num].style.background="#ccc";
            }
        }
        oImgli.style.left=0+"px";
        
    }
    
}

oIpt[0].onclick=function(){
    if(num>0 ){
        num--;
        // oImg[0].src=arrimg[num];
         for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
        }
        oNum[num].style.background="#ccc";
    }else{
        num=4;
        // oImg[0].src=arrimg[num];
         for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
        }
        oNum[num].style.background="#ccc";
    }
}
oIpt[1].onclick=function(){
    change();
}



//获取当前时间 时钟
var oTime =kj("#time");
    var Time = new Date();
    var Year = Time.getFullYear();
    var Month = Time.getMonth() +1;
    var Day = Time.getDate();
    var weekDay = Time.getDay() ;
    var Hour = Time.getHours();
    var Minute = Time.getMinutes();
    var sec = Time.getSeconds();
    var Week =new Array("日","一","二","三","四","五","六")

    var update=setInterval(date,1000);

    function date(){
        sec++;
        if(sec<10 || sec==0){
                sec="0"+sec;
            }
        if(sec==60){
            sec="00";

            Minute++;
            if(Minute==60){
                Minute="00";
                Hour++;
                if(Hour==24){
                Hour="00";
                weekDay++;
                }
            }
        }
        oTime.innerHTML =  Year+"年" +Month + "月" +Day + "日"+"  "+ Hour +":"+Minute +":"+sec+" 星期"+ Week[weekDay];
    }



moveMouse(kj("#emicon"),0,1220,20,618);
//移动限制范围函数封装
function moveMouse(obj,a,b,c,d){
        var x1,y1,x2,y2,x3,y3,initX,initY,moveflage=false;  

        obj.onmousedown=function(event){
            x1=event.pageX;
            y1=event.pageY;
            initX = this.offsetLeft;
            initY = this.offsetTop;
            moveflage=true;
        }
        obj.onmousemove=function(event){
                if(moveflage){
                    x2=event.pageX;
                    y2=event.pageY;
                    x3 = parseInt(x2)-parseInt(x1)+parseInt(initX);
                    y3 = parseInt(y2)-parseInt(y1)+parseInt(initY);
                    //限定边界条件 
                    if(x3>a && x3<b && y3>c && y3<d)
                    if(x3>a && x3<b) x3=x3;
                    if(x3<a ) x3=a;
                    if(x3>b ) x3=b;
                    if(y3>c && y3<d) y3=y3;
                    if(y3<c ) y3=c;
                    if(y3>d ) y3=d;
                    // 保留最后位置
                    this.style.left=x3+"px";
                    this.style.top=y3+"px";
                }
        }
        obj.onmouseup=function(){
            this.style.left=x3+"px";
            this.style.top=y3+"px";
            moveflage=false;
        }

    }
	
	//弹出注册窗口
    kj("#emicon").ondblclick=function(){
        window.open("002.html","login up","width=700,height=350,top=200,left=400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,");
    }

	//弹出游戏拼图窗口
	kj("#game").onclick=function(){
		  window.open("003.html","login up","width=400,height=500,top=200,left=400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,");
	}

    kj("#xz").onclick=function(){
          window.open("xz.html","login up","width=1280,height=650,top=50,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,");
    }

    kj("#music").onclick=function(){
          window.open("music.html","login up","width=400,height=600,top=50,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no,");
    }
