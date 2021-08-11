localStorage.setItem("LSusername", "Admin");
localStorage.setItem("LSpassword", "000");


function Check(){

var Uname = document.getElementById("username").value;
var pass  = document.getElementById("password").value;

if ( Uname == localStorage.getItem("LSusername")){
if ( pass == localStorage.getItem("LSpassword") || pass == localStorage.getItem("NLSpassword")){

alert ("Login successfully");
window.open("index.html");
return false;
}
}


else{

alert ("wrong !! User name or Password");

}}


function ChangePss(){

localStorage.setItem("NLSpassword", document.getElementById("NPassword").value);
alert ("Password changed");

}

