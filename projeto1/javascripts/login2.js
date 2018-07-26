

var username = document.getElementById("username");
// var userwrapper = document.getElementById("userwrapper");
var password = document.getElementById("password");
// var passwrapper = document.getElementById("passwrapper");



function checker() {
    var value = this.value;
    var wrapper = this.parentElement;
    // var passvalue = password.value;
    console.log(this.id);

    if (value == undefined || value.length > 0 && value.length < 3 || value.length > 20) {
        wrapper.classList.add("error");
        wrapper.classList.remove("ok");
        
    } 
        else if (value == 0) {
        wrapper.classList.remove("error");
        wrapper.classList.remove("ok");
    } 
        else {
        wrapper.classList.remove("error");
        wrapper.classList.add("ok");
        
    }

    // if (passvalue == undefined || passvalue.length > 0 && passvalue.length < 3 || passvalue.length > 20) {
    //     passwrapper.classList.add("error");
    //     passwrapper.classList.remove("ok");
        
    // } 
    //     else if (passvalue == 0) {
    //     passwrapper.classList.remove("error");
    //     passwrapper.classList.remove("ok");
        
    // }
    //     else {
    //     passwrapper.classList.remove("error");
    //     passwrapper.classList.add("ok");
        
    // }


}

username.addEventListener("change", checker);
password.addEventListener("change", checker);