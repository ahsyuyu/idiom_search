var showidiom=function(idiom){
	return '<span class="key">'+idiom.key+"</span>："+"「"+idiom.zu+"」"+"("+idiom.han+")"+idiom.def;
}

var dosearch=function(tofind){
	//var tofind=document.getElementById("tofind").value;
	var arr=search(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
	document.getElementById("result_num").innerHTML=arr.length+" results";
}

var dosearch_def=function(tofind){
	//var tofind=document.getElementById("tofind").value;
	var arr=search_def(tofind);
	document.getElementById("result").innerHTML=arr.map(showidiom).join("<br>");
	document.getElementById("result_num").innerHTML=arr.length+" results";
}