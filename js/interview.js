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
var colors=[];
var count=colors.push('red','green');
// console.log(count);
count=colors.push('black');
// console.log(count);
var item=colors.shift();
console.log(item);
console.log(colors.length);
var values=[0,2,1,4,5,,10,3];
values.sort();
console.log(values);
function compare(value1,value2){
	if(value1<value2){
		return -1;
	}else if(value1>value2){
		return 1;
	}else{
		return 0;
	}
}
values.sort(compare);
console.log(values);

// 数组的一些操作
var colors2=colors.concat('yellow',['black','brown']);
console.log(colors);
console.log(colors2);
//slice()方法
var color_all=['red','yellow','blue','green','purple'];
var color1=color_all.slice(1);
var color2=color_all.slice(1,4);
console.info(color1);
console.info(color2);
// splice()方法
var sp_arr=['red','green','blue'];
var removed=sp_arr.splice(sp_arr.length,1);
console.log(sp_arr);
console.log(removed);
//indexOf()方法  可以接收两个参数 查找的位置索引和要查找的项 返回查找的索引
var numbers=[1,2,3,4,5,4,3,2,1];
console.info('---indexOf--');
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));
//ECMAScript5为数组定义了5个迭代方法
// every(),filter(),forEach(),map(),some()
var everyResult=numbers.every(function(item,index,array){
	return (item>2);
})
console.log(everyResult); //false
var someResult=numbers.some(function(item,index,array){
	return (item>2);
})
console.log(someResult); //true
var filterResult=numbers.filter(function(item,index,array){
	return (item>2);
})
console.log(filterResult);//[3,4,5,4,3]
var mapResult=numbers.map(function(item,index,array){
	return item*2;
});
console.log(mapResult);

function eachResult(arr){
	arr.forEach(function(item,index,array){
		
	})
}
eachResult(numbers);

//ECMAScript 增加缩小数组的方法 reduce() reduceRight()
var revalues=[1,2,3,4,5];
var sum=revalues.reduce(function(prev,cur,index,array){
	return prev+cur;
})
// console.log(sum);  15















