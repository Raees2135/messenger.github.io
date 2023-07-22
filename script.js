
const logInForm = document.getElementById("login-form")

logInForm.addEventListener("submit", valid);
function valid() {

    let password = document.getElementById("password").value;
    let userInfo = document.getElementById("userInfo").value;
    let userError = document.getElementById("user-error");
    let passwordError = document.getElementById("password-error");
    if(userInfo=="")
    {
        userError.innerHTML="number or email please"
    }else if(!isNaN(userInfo))
    {
        if(userInfo<Math.pow(10,9))
        userError.innerHTML="Enter 10 digit of numbers"
    }
    else if(!userInfo.includes("@"))
    {
            userError.innerHTML="Enter a valid email"
    }
    else{
        userError.innerHTML=""
    }

    if(password=="")
    {
        passwordError.innerHTML="Why can't you type the password"
        
    }else if (password.length<6) {
        passwordError.innerHTML="enter minimum 6 letters"
    }
    else{
        passwordError.innerHTML="";
    }
}