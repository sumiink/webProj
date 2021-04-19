/**
 * login.js
 *     <!-- 예제-->
    <!-- <form action = "login.jsp" method="get" >
        id:<input type = 'text' name="id">
        passwd:<input type='password' name='passwd'>
        <input type="submit" value="Send">
        <input type="reset" valud="Cancel">
    </form> -->
 */

//form생성
var form = document.createElement('form');
form.setAttribute('action', 'login.jsp');
form.setAttribute('method', 'get');

//label => id: , password:
var id = document.createTextNode('id:');
var passwd = document.createTextNode('passwd:');
//input => id, passwd
var inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'id');
var inputPw = document.createElement('input');
inputPw.setAttribute('type','password');
inputPw.setAttribute('name', 'passwd');
//label send,reset
var send = document.createElement('send');
var cancel = document.createElement('cancel');
//input => send, cancel
var inputSd = document.createElement('input');
inputSd.setAttribute('type','submit');
inputSd.setAttribute('value', 'Send');
var inputRs = document.createElement('input');
inputRs.setAttribute('type', 'reset');
inputRs.setAttribute('value','Cancel')


form.appendChild(id);
form.appendChild(inputId);
form.appendChild(passwd);
form.appendChild(inputPw);
form.appendChild(inputSd);
form.appendChild(inputRs);

document.body.appendChild(form);