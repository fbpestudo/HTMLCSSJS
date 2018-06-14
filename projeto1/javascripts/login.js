var username = document.getElementById("username");
var userwrapper = document.getElementById("userwrapper");

function checkusername() {
    var uservalue = username.value;
    //console.log(username);

    if (uservalue == undefined || uservalue.length < 3 || uservalue.length > 20) {
        console.log("Campo inválido, digite um valor entre 3 e 20 caracteres");
        userwrapper.classList.add("error");
        userwrapper.classList.remove("ok");
    } else {
        userwrapper.classList.remove("error");
        userwrapper.classList.add("ok");
    }
}

username.addEventListener("change", checkusername);


var password = document.getElementById("password");
var passwrapper = document.getElementById("passwrapper");

function checkpassword() {
    var passvalue = password.value;
    //console.log(username);

    if (passvalue == undefined || passvalue.length < 3 || passvalue.length > 20) {
        console.log("Campo inválido, digite um valor entre 3 e 20 caracteres");
        passwrapper.classList.add("error");
        passwrapper.classList.remove("ok");
    } else {
        passwrapper.classList.remove("error");
        passwrapper.classList.add("ok");
    }
}

password.addEventListener("change", checkpassword);