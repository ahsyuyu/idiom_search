var search=function(tofind){
	var out=[];
	//var searchword="tofind";
	var searchword=new RegExp(tofind,"g");

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

	//return "X"+input;
	return "<FONT COLOR='red'>"+input+"</FONT>"
}
