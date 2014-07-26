var showidiom=function(idiom){
	return '<li><span class="key">'+idiom.key+"</span>："+"注音："+idiom.zu+"，漢語拼音："+idiom.han+"<br><span class='def'>定義："+idiom.def+"</span><br></li>";
}

var dosearch=function(tofind){
	//var tofind=document.getElementById("tofind").value;
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
	document.getElementById("result_num").innerHTML=arr.length+" results";
}

var dosearch_def=function(tofind){
	//var tofind=document.getElementById("tofind").value;
	var arr=search(tofind,"def");
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
	document.getElementById("result_num").innerHTML=arr.length+" results";
}