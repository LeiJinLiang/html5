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
Object.prototype.clone=function(){
	if(typeof this!='object'||this==null){
		return this;
	}
	var Constructor=this.constructor;
	var newObj=new Constructor();
	for(var i in this){
		newObj[i]=this[i].clone();
	}
	return newObj;
}
var arr=[];
console.info(arr.constructor===Array);
// ------js map 遍历数组--




