const myform = document.querySelector("#myform");
const errormsg = document.querySelector(".errormsg");
const successmsg = document.querySelector(".successmsg");

window.addEventListener("load", function() {
    errormsg.style.display = "none";
    successmsg.style.display = "none";
});

myform.addEventListener("submit", function(event) {
    event.preventDefault();

    let names = document.querySelector("#names");
    let email = document.querySelector("#email");
    let password = document.querySelector("#Password");

    let namevalue = names.value.trim();
    let emailvalue = email.value.trim();
    let passvalue = password.value.trim();

    if (namevalue === "" || emailvalue === "" || passvalue === "") {
        alert("Please fill in all fields.");
        return;
    }

    let validPassword = passvalue.length >= 5 && (passvalue.includes("#") || passvalue.includes("$") || passvalue.includes("%"));

    if (!validPassword) {
        errormsg.style.display = "block";
        successmsg.style.display = "none";
    } else {
        errormsg.style.display = "none";
        successmsg.style.display = "block";
    }

    names.value = "";
    email.value = "";
    password.value = "";
});
