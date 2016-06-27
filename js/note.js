function saveStorage(id){
	var data=document.getElementById(id).value;
	var time=new Date().getTime();
	localStorage.setItem(time,data);
	console.info('数据已经保存');
	loadStorage('msg');
}
function loadStorage(id){
	var result='<table border="1">';
	for(var i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		var value=localStorage.getItem(key);
		var date=new Date();
		var datestr=date.toGMTString();
		result+='<tr><td>'+value+'</td></td>'+datestr+'</td></tr>';
		result+='</table>';
		var target=document.getElementById(id);
		target.innerHTML=result;
	}
}
function clearStorage(){
	localStorage.clear();
	console.info('数据全部清除');
	localStorage('msg');
}