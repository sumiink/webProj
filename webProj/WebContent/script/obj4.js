var tableTag = '<table border="1">';
// tableTag += '<tr><td> </td></tr>';
// <tr><td>2*1</td> <td>=</td> <td>2</td></tr>
document.write('<tr>')
for (let i = 1; i <= 9; i++) {
    tableTag+='</tr>'
    for (let j = 1; j <= 9; j++) {
        tableTag += '<tr><td>' + i + '*' + j + '</td><td>=</td><td>' + j * i + '</td></tr>';
        // tableTag += '<tr><td>2*' +i+ '</td><td>=</td><td>' +2*i+ '</td></tr>'; //구구단 2단만
    }
}
tableTag += '</table>';
document.write(tableTag);