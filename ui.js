var showidiom=function(idiom){
	return "<b>"+idiom.key+"</b>："+"「"+idiom.zu+"」"+"("+idiom.han+")"+idiom.def;
}

var dosearch=function(tofind){
	//var tofind=document.getElementById("tofind").value;
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
}