var search=function(tofind){
	var out=[];
	//var searchword="tofind";
	if (tofind.indexOf(".")>-1){
		searchword=tofind.replace(0,"");
		searchword=searchword.replace(searchword.length-1,"");
	} else {var searchword=new RegExp(tofind,"g");}

	//var searchword=new RegExp(tofind,"g");

	for(var i=0;i<idioms.length;i++){
		var find=idioms[i].key.match(searchword);
		if(find){
			idioms[i].key=idioms[i].key.replace(searchword,changecolor);
			out.push(idioms[i]);
			//out.replace(searchword_re, changecolor(searchword) );
		}
	}
	return out;
}

var search_def=function(tofind){
	var out=[];
	//var searchword="tofind";
	var searchword=new RegExp(tofind,"g");

	for(var i=0;i<idioms.length;i++){
		var find=idioms[i].def.match(searchword);
		if(find){
			idioms[i].def=idioms[i].def.replace(searchword,changecolor);
			out.push(idioms[i]);
			//out.replace(searchword_re, changecolor(searchword) );
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
