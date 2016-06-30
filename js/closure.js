var aLi=document.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
	(function(i){
            aLi[i].onclick = function(){
                    console.info(i);
            };
    })(i);
}
function outer(){
	var a=1;
	return function(){
		a++;
		console.log(a);
	}
}
var test=outer();
test();
test();
test();

function setNull(obj){
	return obj=null;
}

ele=document.getElementById('btn');
ele.addEventListener('click',function(){
	setNull(test);
})