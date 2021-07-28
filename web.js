var correct_username = "dungga";
var correct_password = "dungga2";

var input_username = document.getElementById("username");
var input_password = document.getElementById("password");

var form_login = document.getElementsById("formm");

if (form_login.attachEvent) {
    form_login.attachEvent("submit", onFormSubmit);
} else {
    form_login.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(e) {
    var username = input_username.value;
    var password = input_password.value;

    if (username == correct_username && password == correct_username) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Đăng nhập thất bại");
    }
}