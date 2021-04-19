
var buttons = document.getElementsByTagName('button');
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('onclick', 'showTable()');
}
// button[0].setAttribute('onclick','showTable()');
var p1 = {
    name: '성진아',
    score: 80,
    gender: '여',
}
var p2 = {
    name: '김수민',
    score: 83,
    gender: '남'
}
var p3 = {
    name: '장재우',
    score: 85,
    gnder: '남'
}

for (var field in p3) {
    console.log(field, p3[field]);
}
var persons = [p1, p2, p3];
// <table border ='1'> <tr><td>성진아</td><td>80</tr>.....</table>
for (var p of persons) { //배열의 개수만큼 반복.
    console.log(`name요소: ${p.name}`);
    console.log(`score요소: ${p.score}`);
}

function showTable() {
    var tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1');
    for (var person of persons) { //배열에서 반복
        var tr1 = document.createElement('tr');
        for (var field in person) { //object에서 반복
            var td1 = document.createElement('td');
            td1.innerHTML = person[field];
            tr1.appendChild(td1);
        }
        tableTag.appendChild(tr1);
    }
    var show = document.getElementById('show');
    show.appendChild(tableTag);

    // for (var p of persons) {
    //     var td1 = document.createElement('td');
    //     var td2 = document.createElement('td');
    //     td1.innerHTML = p.name;
    //     td2.innerHTML = p.score;
    //     tableTag.appendChild(tr1);
    //     tr1.appendChild(td1);
    //     tr1.appendChild(td2);
    // }
}
// var show = document.getElementById('show');
// show.appendChild(tableTag);
