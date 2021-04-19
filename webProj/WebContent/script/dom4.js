

var ps = document.querySelector('div>p');    
ps.textContent = 'hello';
ps.style.backgroundColor = 'yellow';



var ps = document.querySelectorAll('div>p');    
console.log(ps);
ps.forEach(function(val){
    console.log(val);
    val.innerText ='<h1>hello</h1>';       //''문자 그대로 
    val.innerHTML = '<h1>hello</h1>';       // 
    val.textContent = '<h1>hello</h1>';     //''문자 그대로
    val.style.backgroundColor = 'green';
});


//numbers => 1 ~ 10 
//filetr, map, forEach => filter:완벽한 조건 리턴 
//filter=>짝수만걸러내도록 evenVal; 변수선언 
//                       evenVal=> n*3; 값 리턴 => mapVal; 
//                                                 mapVal =>console.log(각각 출력);
var numbers =[1,2,3,4,5,6,7,8,9,10];

var evenVal = numbers.filter(function(val, idx, ary){
   return val%2==0;
}); 
var mapVal = evenVal.map(function (val, idx, ary) {
    return val*3;
});
    mapVal.forEach(function (val, idx, ary) {
     console.log(val);   
    });


 numbers.filter((val)=> val % 2 == 0)
        .map((val) => val * 3)
        .forEach((val) => console.log(val));

var sum =(a, b)=> a + b;      //arrow function

sum(20,20);
console.log(val);

