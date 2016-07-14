function createComparisonFunction(propertyName){
	return function(obj1,obj2){
		var value1=obj1[propertyName];
		var value2=obj2[propertyName];
		if(value1<value2){
			return -1;
		}else if(value1>value2){
			return 1;
		}else{
			return 0;
		}
	}
}
var data=[{name:'Zachary',age:28},{name:'Nicholas',age:29}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);
data.sort(createComparisonFunction('age'));
console.log(data[0].name);

//阶乘
function factorial(num){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}

var result=factorial;
factorial=function(){
	return 0;
}
console.log(result(5));
console.log(factorial(5));

//String  trim()方法
var stringValue="  hello  world  ";
var trimedStringValue=stringValue.trim();
console.log(stringValue);
console.log(trimedStringValue);
var num=0;
var max=10;
function incrementNumber(){
	num++;
	if(num<max){
		setTimeout(incrementNumber,500);
	}else{
		console.info("Done");
	}
}

setTimeout(incrementNumber,500);

var name='World!';
(function(){
	var name;
	if(typeof name=='undefined'){
		name='Jack';
		console.log('Goodbye'+name);
	}else{
		console.log('Hello'+name);
	}
})();







