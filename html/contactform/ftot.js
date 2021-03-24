

function myfunction() {
var name= document.getElementById("name").value;
var phone= document.getElementById("phone").value;
var email= document.getElementById("email").value;
var address= document.getElementById("address").value;
var pincode= document.getElementById("pc").value;
var Options= document.getElementById("buttons").innerHTML;


if (!name || !phone || !email || !address || !pincode){
alert("please fill all");
return;
}
var row =1;



var table = document.getElementById("mytable");
var newRow = table.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);



cell1.innerHTML = name;
cell2.innerHTML = phone;
cell3.innerHTML = email;
cell4.innerHTML = address;
cell5.innerHTML = pincode;
cell6.innerHTML = Options;


row++;

 
localStorage.setItem("addressbook~" + email, "=" + name + "~" + phone + "~" + email + "~" + address + "~" + pincode);
var retrive = localStorage.getItem("addressbook~" + email);
var table = retrive;
}