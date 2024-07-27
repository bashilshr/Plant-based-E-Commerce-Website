function validate()
{
  var name = document.getElementById("amen").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if(name == "")
  {
      alert("Please Enter valid name");
    return false;
  }
  if(phone == "")
  {
      alert("Please Enter valid phone number");
    return false;
  }
  if(email == "")
  {
      alert("Please Enter valid email");
    return false;
  }
  if(message == "")
  {
    alert("Please Enter valid message");
    return false;
  }
  alert("The form has been submitted successfully!");
  return true;
}