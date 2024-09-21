// function-> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/uusgeh->function funcName (){}
// argument/parametr-> zaaval avah utga
function hello(name,age,gender){
	console.log('hello '+name);
	console.log('i am '+age+' years old');
	console.log('i am '+gender)
}
// call/duudaj ajiluulah
hello('otgoo',16,"male");
hello('suvd',17,"female");
function niilber(neg,hoyr){
	console.log(neg+hoyr);
}
niilber(10,6);
niilber(20,10);
function kvadrat(too){
	console.log(too*too);
}
kvadrat(12);
function find(nas){
	if(nas>18){
		console.log('nasand hursen')
	}else{
		console.log('nasand hureegui')
	}
}
find(16);
find(19);
//DOM -> document ->html deer bga buh code
console.log(document);
var a = document.getElementsByTagName('h1')[0];
console.log(a);
// varNAME.styleNAME="value";
a.style.color="red";
//varNAME.innerTEXT="word";
a.innerText ="hello world";
var b = document.getElementsByTagName('h1')[1];
console.log(b);
b.style.color='green';
b.innerText="Hello world";
var h2 = document.getElementsByTagName('h2')[0];
function click2(){
	//alert('test');
	h2.style.color="green";
	h2.innerText="changed";
}
var input = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
var i = document.getElementsByTagName('p')[1];
console.log(p);
console.log(input);
function findYear(){
	// .value -> input deer bichsen utga 
	//alert(input.value);
	var year = 2024-input.value;
	var ten = parseInt(input.value)+10;
	i.innerText="After 10 years:"+ten;
	if(input.value>120){
		p.style.color="red"
		p.innerText="Hun iim nas naslahgui"
	}else if(input.value<0){ 
		p.style.color="Yellow"
		p.innerText="ta turuugui bn"
	}else{
		p.innerText="Year birth year:"+year;
	}
}
