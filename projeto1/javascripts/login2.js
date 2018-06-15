

var username = document.getElementById("username");
var userwrapper = document.getElementById("userwrapper");
var password = document.getElementById("password");
var passwrapper = document.getElementById("passwrapper");



function checker() {
    var uservalue = username.value;
    var passvalue = password.value;

    if (uservalue == undefined || uservalue.length > 0 && uservalue.length < 3 || uservalue.length > 20) {
        userwrapper.classList.add("error");
        userwrapper.classList.remove("ok");
        
    } 
        else if (uservalue == 0) {
        userwrapper.classList.remove("error");
        userwrapper.classList.remove("ok");
    } 
        else {
        userwrapper.classList.remove("error");
        userwrapper.classList.add("ok");
        
    }

    if (passvalue == undefined || passvalue.length > 0 && passvalue.length < 3 || passvalue.length > 20) {
        passwrapper.classList.add("error");
        passwrapper.classList.remove("ok");
        
    } 
        else if (passvalue == 0) {
        passwrapper.classList.remove("error");
        passwrapper.classList.remove("ok");
        
    }
        else {
        passwrapper.classList.remove("error");
        passwrapper.classList.add("ok");
        
    }


}

username.addEventListener("change", checker);
password.addEventListener("change", checker);