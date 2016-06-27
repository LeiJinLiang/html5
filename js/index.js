function saveStorage(id){
	var taget=document.getElementById(id);
	var str=taget.value;
	sessionStorage.setItem("message",str);
}
function loadStorage(id){
	var target=document.getElementById(id);
	var msg=sessionStorage.getItem("message");
	target.innerHTML=msg;
}