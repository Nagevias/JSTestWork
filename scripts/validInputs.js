let validation = () => {
    var phone = document.getElementById('phone').value;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

if (phone === '') {
    alert('"Phone" field is empty. Please, enter some information');
    return false;
}
else if (!isPhone(phone)){
    alert('Invalid phone number');
    return false;
}

if (fullName === '') {
    alert('"Full name" field is empty. Please, enter some information');
    return false;
}
else if (!isFullName(fullName)){
    alert('Invalid full name');
    return false;
}

if (email === '') {
    alert('"E-mail" field is empty. Please, enter some information');
    return false;
}
else if (!isEmail(email)){
    alert('Invalid e-mail');
    return false;
}

if (address === '') {
    alert('"Address" field is empty. Please, enter some information');
    return false;
}
else if (!isAddress(address)){
    alert('Invalid address');
    return false;
}

return true;
}

let isPhone = (phone) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
};

let isFullName = (fullName) => {
    return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);
};

let isEmail = (email) => {
    return /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/.test(email);
};

let isAddress = (address) => {
    return /^[a-zA-Z0-9\s,'-]*$/.test(address);
};