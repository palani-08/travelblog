function saveData(event) {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pc").value;



    if (!name || !phone || !email || !address || !pincode) {
        alert("please fill all");
        return;
    }
    var key = 'addressbook~' + email
    var checkRecord = JSON.parse(localStorage.getItem(key));
    if (checkRecord != null) {
        checkRecord.name = name;
        checkRecord.phone = phone;
        checkRecord.email = email;
        checkRecord.address = address;
        checkRecord.pincode = pincode;
    } else {
        var checkRecord = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address,
            "pincode": pincode
        }
    }

    localStorage.setItem("addressbook~" + email, JSON.stringify(checkRecord));
    this.getData(event);
}

function editRow(key) {
    key = 'addressbook~' + key;
    objPerson = JSON.parse(localStorage.getItem(key));

    document.getElementById("name").value = objPerson.name;
    document.getElementById("phone").value = objPerson.phone;
    document.getElementById("email").value = objPerson.email;
    document.getElementById("address").value = objPerson.address;
    document.getElementById("pc").value = objPerson.pincode;
}

function deleteRow(key) {
    key = 'addressbook~' + key;
    localStorage.removeItem(key);
    this.getData(event);
}

function getData(event) {
    var data = localStorage;

    //Clear the table first regardless of whether it is 
    // click or load event
    var table = document.getElementById("mytable");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    //Get the data from localstorage and Paint the table.
    for (item in data) {
        if (item.indexOf('addressbook~') != -1) {
            objPerson = JSON.parse(localStorage.getItem(item));
            paintTable(objPerson, event)
        }
    }
}

function paintTable(objPerson, event) {
    var editButton = "<button onclick=editRow(" + JSON.stringify(objPerson.email) + ")>Edit</button>";
    var deleteButton = "<button onclick=deleteRow(" + JSON.stringify(objPerson.email) + ")>Delete</button>";
    var btnAction = editButton + deleteButton;

    var table = document.getElementById("mytable");

    var newRow = table.insertRow(1);
    newRow.insertCell(0).innerHTML = objPerson.name;
    newRow.insertCell(1).innerHTML = objPerson.phone;
    newRow.insertCell(2).innerHTML = objPerson.email;
    newRow.insertCell(3).innerHTML = objPerson.address;
    newRow.insertCell(4).innerHTML = objPerson.pincode;
    newRow.insertCell(5).innerHTML = btnAction;

    //Force clean the form
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';
    document.getElementById("address").value = '';
    document.getElementById("pc").value = '';
}