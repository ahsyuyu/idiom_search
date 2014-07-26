var search=function(tofind,field){
	var field=field || "key"  ; //如果使用者沒有指定，就用 key 	
	var out=[];

	//var searchword="tofind";
	var searchword=new RegExp(tofind,"g");

	for(var i=0;i<idioms.length;i++){
		var find=idioms[i][field].match(searchword);
		var res={key: idioms[i].key, def:idioms[i].def};
		if(find){
			res[field]=idioms[i][field].replace(searchword,changecolor);
			//idioms[i][field]=idioms[i][field].replace(searchword,changecolor);
			out.push(res);
			//out.push(idioms[i]);
		}
	}
	return out;
}

var changecolor=function(input){

	/*document.getElementById("change").innerHTML=input;
	var color=document.getElementById("change").innerHTML;
	return color;*/
	return '<span class="tofind">'+input+"</span>"
}
