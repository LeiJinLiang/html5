function init(){
	var source=document.getElementById('dragme');
	var dest=document.getElementById('text');
	source.addEventListener('dragstart',function(ev){
		var dt=ev.dataTransfer;
		dt.effectAllowed='all';
		dt.setData("text/plain","您好");
	},false);
	dest.addEventListener('dragend',function(ev){
		ev.preventDefault();
	},false);
	dest.addEventListener('drop',function(ev){
		var dt=ev.dataTransfer;
		var text=dt.getData('text/plian');
		dest.textContext+=text;
		ev.preventDefault();
		ev.stopPropagation();
	},false);
}
document.ondragover=function(e){
	e.preventDefault();
}
document.ondrop=function(e){
	e.preventDefault();
}
