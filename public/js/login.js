// Simple login validation
// function formValidate() {
//     var username = document.getElementById("username");
//     var password = document.getElementById("password");
//     if (username.value.length != "" && password.value.length >= 5) {
//         return true;
//     }
//     return false;
// }


function formValidate(){

    var un=document.getElementById("username").value;
  
    var pwd=document.getElementById("pwd").value;
  
    var username="admin";
  
    var password="12345";
  
    if((un==username)&&(pwd==password)){
  
      return true;
  
    }
  
    return false;  
  
  }