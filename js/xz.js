 window.onload=function(){
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var d=document.getElementById("d");
var a1=document.getElementById("a1");
var b1=document.getElementById("b1");
var c1=document.getElementById("c1");
var d1=document.getElementById("d1");

	a.onmouseover=function(){
		a.style.width="700px";
		a1.style.display="block";
		b.style.width=c.style.width=d.style.width="100px";
		b1.style.display=c1.style.display=d1.style.display="none";
	}
	b.onmouseover=function(){
		b.style.width="700px";
		b1.style.display="block";
		a.style.width=c.style.width=d.style.width="100px";
		a1.style.display=c1.style.display=d1.style.display="none";
	}
	c.onmouseover=function(){
		c.style.width="700px";
		c1.style.display="block";
		b.style.width=a.style.width=d.style.width="100px";
		b1.style.display=a1.style.display=d1.style.display="none";
	}
	d.onmouseover=function(){
		d.style.width="700px";
		d1.style.display="block";
		b.style.width=c.style.width=a.style.width="100px";
		b1.style.display=c1.style.display=a1.style.display="none";
	}
}