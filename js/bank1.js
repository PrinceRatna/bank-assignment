
document.getElementById("submit-button").addEventListener("click",function(){
    console.log("submit button is clicked");

    var emailField=document.getElementById("email-adress");
    var passwordField=document.getElementById("password-text");

    if(emailField.value=='princeratna125@gmail.com' && passwordField.value=='1234'){
        console.log(emailField.value);
        console.log(passwordField.value);
        window.location.href='index2.html';//very important line
    }

})