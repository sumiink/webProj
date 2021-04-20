function createTitle() {
    var trTag = document.createElement('tr');
    for (var i = 0; i < arguments.length; i++) {
        var td1 = document.createElement('th');
        td1.innerHTML = arguments[i];
        trTag.appendChild(td1);
    }
    tbl.appendChild(trTag);
}

function createData() {
    for (var person of persons) {
        var trTag = document.createElement('tr');
        trTag.setAttribute('id', person.id)
        trTag.onmouseover = mouseOverFnc;
        trTag.onmouseout = mouseOutFnc;

        for (var field in person) {
            if (field == 'id') {
                var tdTag = document.createElement('td');
                tdTag.onclick = modifyFunc;
                var text = document.createTextNode(person[field]);
                trTag.appendChild(tdTag);
                tdTag.appendChild(text);
            } else if (field == 'name') {
                var tdTag = document.createElement('td');
                var link = document.createElement('a');
                link.setAttribute('href','dom.jsp?name'+ person.name+ '&id=' +person.id + '&score=' +person.score + '&gender='+person.gender);
                link.innerHTML = person.name;
                tdTag.appendChild(link);
                trTag.appendChild(tdTag);
           
            } else {
                var tdTag = document.createElement('td');
                var text = document.createTextNode(person[field]);
                trTag.appendChild(tdTag);
                tdTag.appendChild(text); 
            }
        }
        var btn = document.createElement('button');
        btn.innerHTML = '삭제';
        btn.onclick = deleteRow;

        var tdTag = document.createElement('td');
        tdTag.appendChild(btn);
        trTag.appendChild(tdTag);

        tbl.appendChild(trTag);
    }
}

function mouseOverFnc() {
    this.style.backgroundColor = 'yellow';
}

function mouseOutFnc() {
    this.style.backgroundColor = '';
}

function deleteRow() {
    this.parentNode.parentNode.remove();
}

function modifyFunc() {
    console.log(this);
    var idVal = this.innerHTML;
    var nameVal = this.previousSibling.innerHTML;
    var scoreVal = this.nextSibling.innerHTML;
    var genval = this.parentNode.childNodes[3].innerHTML;
    console.log(idVal, nameVal, scoreVal, genval);

    document.getElementById('name').value = nameVal;
    document.getElementById('id').value = idVal;
    document.getElementById('score').value = scoreVal;
    var genders = document.querySelectorAll('input[name="gender"]');
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].value == genval) {
            genders[i].checked = true;
        }
    }
}

function saveBtnFnc() {

    var iName = document.getElementById('name');
    var iId = document.querySelector('input[name = "id"]');
    var iScore = document.getElementsByTagName('input')[2];
    var iGender = document.querySelector('input[name = "gender"]:checked');
    // console.log(iGender.value);

    var trTag = document.createElement('tr');
    trTag.onmouseover = mouseOverFnc;
    trTag.onmouseout = mouseOutFnc;

    //name
    var tdTag = document.createElement('td');
    tdTag.innerHTML = iName.value;
    trTag.appendChild(tdTag);
    //id
    tdTag = document.createElement('td');
    tdTag.innerHTML = iId.value;
    trTag.appendChild(tdTag);
    //score
    tdTag = document.createElement('td');
    tdTag.innerHTML = iScore.value;
    trTag.appendChild(tdTag);
    //gender
    tdTag = document.createElement('td');
    tdTag.innerHTML = iGender.value;
    trTag.appendChild(tdTag);
    //button
    var btn = document.createElement('button');
    btn.innerHTML = '삭제';
    btn.onclick = deleteRow;

    var tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tbl.appendChild(trTag);
}

function modifyBtnFunc() {
    var id = document.getElementById('id').value;
    var targetTr = document.getElementById(id);
    console.log(targetTr);
    targetTr.children[0].innerHTML = document.getElementById('name').value;
    targetTr.children[2].innerHTML = document.getElementById('score').value;
    targetTr.children[3].innerHTML = document.querySelector('input[name="gender"]:checked').value;
}