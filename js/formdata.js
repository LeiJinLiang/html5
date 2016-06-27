function uploadFile(){
	var formData=new FormData();
	var files=document.getElementById('file1').files;
	for(var i=0;i<files.length;i++){
		var file=files[i];
		formData.append('myfile[]',file);
	}
	var xhr=new XMLHttpRequest();
	xhr.open('POST','',true);
	xhr.onload=function(e){
		if(this.status==200){
			document.getElementById('result').innerHTML=this.response;
		}
	}
	xhr.send(formData);
}
var str="hello world!";
console.info(str.indexOf('hello'));
console.info(str.indexOf('world'));
console.info(str.indexOf('hello1'));