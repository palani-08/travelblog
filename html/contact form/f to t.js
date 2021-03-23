

function myfunction() {
var name= document.getElementById("name").value;
var phone= document.getElementById("phone").value;
var email= document.getElementById("email").value;
var address= document.getElementById("address").value;
if (!name || !phone || !email || !address){
alert("please fill all");
return;
}
var row =1;

var display = document.getElementById("multiplerows");
var newRow = display.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);


cell1.innerHTML = name;
cell2.innerHTML = phone;
cell3.innerHTML = email;
cell4.innerHTML = address;
row++;

var now = new Date();
 now.setMonth(now.getMonth() + 2);

document.cookie = " cell1.innerHTML = " + cell2.innerHTML + "~" + cell3.innerHTML + "~" + cell4.innerHTML;'expires =' + now.toUTCString();
}