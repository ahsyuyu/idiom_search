var glob=require("glob");
var fs=require("fs");
var out=[];

var processFile=function(fn){
	var lines=fs.readFileSync(fn,"utf8").split("\n");
	var key="成語&nbsp;";
	var def="釋義&nbsp;";
	var zu="注音&nbsp;";
	var han="漢語拼音&nbsp;";

	for (var i=200;i<lines.length;i++){
		var line=lines[i];
		if(line.indexOf("<!-- layoutclass_second -->")>-1) break;

		line=line.replace(/<.*?>/g,"");

		var keystart=line.indexOf(key);
		var defstart=line.indexOf(def);
		var zustart=line.indexOf(zu);
		var hanstart=line.indexOf(han);
		
		if (keystart>-1){
			out.push('"key":"'+line.substr(keystart+8)+'"');
		}
		if (defstart>-1){
			out.push('"def":"'+line.substr(defstart+9)+'"');
		}
		if (zustart>-1){
			out.push('"zu":"'+line.substr(zustart+8)+'"');
		}
		if (hanstart>-1){
			out.push('"han":"'+line.substr(hanstart+10)+'"');
		}
			//if(line) out.push(line);  //把空行消掉
	}
	return "{"+out.join(",\n")+"}"
}
glob("cw-data/1000-1999/*.html",function(err,files){
	//console.log(files.length);
	var arr=files.map(processFile);
	var output="var idioms=["+arr.join(",")+"]"
	console.log(output);
})