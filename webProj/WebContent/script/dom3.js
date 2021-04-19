var names = [];
names[0] = '유정모';
names.push('구자혁');       //push: 마지막 위치 추가
names.push('석정원');
names.pop();                //pop메서드:마지막 위치 하나 삭제
delete names[0];            //delet: 값만 지우고 위치는 차지 (요소정보삭제)
names.shift();              //shift: 처음 위치 제거 
names.unshift('김이담');    //unshift:처음위치 추가
names.push('공도현');
names.push('소국진');
names.push('전형민');

var returnVal = names.map(function (val, idx, ary){
   var person = {};
   person.name = val;
   person.num = idx;

    return person;

});
console.log(returnVal);
console.log('===========');
var returnFil = returnVal.filter(function(val, idx, ary){
  return idx %2 == 0;

});


// var show = document.getElementById('show');
// var ulTag = document.createElement('ul');
// show.appendChild(ulTag);

// names.forEach(function (val, idx, ary) {
//     console.log(`names 요소:  ${val},${idx},${ary}`);
    // console.log('names 요소 : ' + i);
    // var liTag = document.createElement('li');
    // liTag.innerHTML = val;      //<li>김이담</li>
    // ulTag.appendChild(liTag);
// });


console.log(returnFil);