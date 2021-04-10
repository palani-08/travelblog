function saveData(event){
var row = 1;
var mytitle = document.getElementById("mytitle").value;
var mytextarea = document.getElementById("mytextarea").value;
var mytags = document.getElementById("mytags").innerText;
if (!mytitle|| !mytextarea ) {
    alert("please fill all");
    return;
}
var key = 'mycontent' + mytitle;
var checkRecord = JSON.parse(localStorage.getItem(key));
if (checkRecord != null) {
    checkRecord.mytitle = mytitle;
    checkRecord.mytextarea = mytextarea;
    checkRecord.mytags = mytags;
} else {
    var checkRecord = {
        "mytitle": mytitle,
        "mytextarea": mytextarea,
        "mytags": mytags
    }
}

localStorage.setItem("mycontent~" + mytitle , JSON.stringify(checkRecord));
this.getData(event);
}



function editRow(key) {
    key = 'mycontent~' + key;
    objPerson = JSON.parse(localStorage.getItem(key));

    document.getElementById("mytitle").value = objPerson.mytitle;
    document.getElementById("mytextarea").value = objPerson.mytextarea;
    document.getElementById("mytags").value = objPerson.mytags;
   
}

function deleteRow(key) {
    key = 'mycontent~' + key;
    localStorage.removeItem(key);
    this.getData(event);
}
/*
    var display = document.getElementById("mydisplay");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = mytitle;
    cell2.innerHTML = mytextarea;
    cell3.innerHTML = mytags;
    cell4.innerHTML = buttons;

*/

   

function getData(event){
    var data = localStorage;
    var table = document.getElementById("mydisplay");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    var data = localStorage.getItem("mycontent~" + mytitle);
    for(items in data){
        if (item.indexOf('mycontent~') != -1) {
            objPerson = JSON.parse(localStorage.getItem(item));
            paintTable(objPerson, event)
        }
    }
}
function paintTable(objPerson, event) {
    var editButton = "<button onclick=editRow(" + JSON.stringify(objPerson.mytitle) + ")>Edit</button>";
    var deleteButton = "<button onclick=deleteRow(" + JSON.stringify(objPerson.mytitle) + ")>Delete</button>";
    var buttons = editButton + deleteButton;

    var table = document.getElementById("mydisplay");

    var newRow = table.insertRow(1);
    newRow.insertCell(0).innerHTML = objPerson.mytitle;
    newRow.insertCell(1).innerHTML = objPerson.mytextarea;
    newRow.insertCell(2).innerHTML = objPerson.mytags;
    newRow.insertCell(3).innerHTML = buttons;


    document.getElementById("mytitle").value = '';
    document.getElementById("mytextarea").value = '';
    document.getElementById("mytags").value = '';
}
