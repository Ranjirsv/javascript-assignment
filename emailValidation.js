function emailValidation(){
var emailId="ranji@wipro.com";
var val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(val.test(emailId)==false)
{
console.log("Email Id is not valid");
}
else{
    console.log("Email Id is valid");
}
}
emailValidation();