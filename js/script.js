function validate()
{
    var username = document.getElementById("username").innerText;
    var password = document.getElementById("password").innerText;

    if(username.length==0 || password.length==0)
    {
           alert("Please Enter Username and Password");
           return false;
    }
    alert("Successfully Loggedin");
    return true;
}
function validateRegistration()
{
    
    var name = document.getElementById("name").innerText;
    var username = document.getElementById("registerusername").innerText;
    var password = document.getElementById("registerpassword").innerText;
    var re_password = document.getElementById("repassword").innerText;
    var email = document.getElementById("email").innerText;
    var phone = document.getElementById("number").innerText;
    if(password.localeCompare(re_password)<0)
    {
        alert("Passwords must match");
        return false;
    }
    else if(name.length==0 || username.length==0 || password.length==0 || re_password.length==0 || email.length==0 || phone.length==0)
    {
        alert("Please Enter all Information");
        return false;
    }
    
    
    alert("Successfully Registered");
    return true;
}