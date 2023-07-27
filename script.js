
const signInForm = document.getElementById("signin-form")

signInForm.addEventListener("submit", valid);
function valid() {

    let password = document.getElementById("password").value;
    let userInfo = document.getElementById("userInfo").value;
    let userError = document.getElementById("user-error")
    let passwordError = document.getElementById("password-error")
    if(userInfo=="")
    {
        userError.innerHTML="Number or email please"
    }else if(!isNaN(userInfo))
    {
        if(userInfo<Math.pow(10,9))
        userError.innerHTML="Enter 10 digit of numbers"
    }
    else if(!userInfo.includes("@"))
    {
            userError.innerHTML="Enter a valid email"
    }

    else if(password=="")
    {
        passwordError.innerHTML="Type the password"
        
    }else if (password.length<8) {
        passwordError.innerHTML="Enter atleast 8 letters"
    }
    else{
        passwordError.innerHTML="";
        userError.innerHTML="";
        alert("Login Successfull")
    }
}