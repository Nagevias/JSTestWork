window.onload = () => {
    updateInfoTable();
};

//Updating and showing all of the elements of the table
var updateInfoTable = () => {
    document.getElementById('mainTable').innerHTML = '';
    if(localStorage.length == 0){
        document.getElementById('mainTable').innerHTML = '<tr><td colspan="5">It is empty</td></tr>';
        return;
    }

    for (var i=0; i < localStorage.length; i++) {
        var record = JSON.parse(localStorage.getItem(localStorage.key(i)));
        document.getElementById('mainTable').innerHTML+='<tr><td>' + record.phone + '</td><td>' + record.fullName + '</td><td>' + record.email +
        '</td><td>'+ record.address + '</td><td><button class = "editButton" onClick ="editInfo(); return;">Edit</button> | <button class = "deleteButton" onClick ="deleteInfo(); return;">Delete</button></td></tr>';
    }
};

//Adding new information to the table
var addNewInfo = () => {
    var newInfo = {
        phone: document.getElementById('phone').value,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };

    document.getElementById('phone').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';

    var newRecordInfo = JSON.stringify(newInfo);
    localStorage.setItem(newInfo.phone, newRecordInfo);

    updateInfoTable();
};

//Deleting existing information from the table
var deleteInfo = () => {
    localStorage.removeItem(event.target.parentElement.parentElement.firstChild.innerText);
    updateInfoTable();
};

//Editing existing information
var editInfo = () => {
    var record = JSON.parse(localStorage.getItem(event.target.parentElement.parentElement.firstChild.innerText));
    document.getElementById('phone').value = record.phone;
    document.getElementById('fullName').value = record.fullName;
    document.getElementById('email').value = record.email;
    document.getElementById('address').value = record.address;
    updateInfoTable();
};