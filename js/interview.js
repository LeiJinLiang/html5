function _checkType(arg){
	var temp=typeof arg;
	switch(temp){
		case 'string':
			return 'string';
			break;
		case 'undefined':
			return 'undefined';
			break;
		case 'number':
			return 'number';
			break;
		case 'boolean':
			return 'boolean';
			break;
		case 'object':
			return 'object';
			break;
		default:
			return 'function';						
				
	}
}
var y=null;
var x=new Date();
console.log(x.constructor);
x=_checkType(x);
console.log(x);
console.log('111'==111);
var arr=[];
console.info(arr.constructor===Array);
// ------js 遍历 对象属性--
function _checkPros(obj){
	var props;
	if(typeof obj=='function'){
		return;
	}else{
		for(var p in obj){
			props+= p + "=" + obj[p]+"<br />";
		}
	}
	console.log(props);
}

var obj1={"name":"jinlei","age":25};

_checkPros(obj1);



