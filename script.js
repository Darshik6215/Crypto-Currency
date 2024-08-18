// Sign Up validation logic
function validateForm() {
  const firstName = document.querySelector("#fname").value.trim();
  const lastName = document.querySelector("#lname").value.trim();
  // email --------------
  const email = document.querySelector("#email").value.trim();
  const atPosition = email.indexOf("@");
  const dotPosition = email.indexOf(".");
  // ---------------------
  const phoneNumber = document.querySelector("#pNumber").value.trim();
  const Password = document.querySelector("#password").value.trim();
  const confirmPassword = document.querySelector("#cPassword").value.trim();
  // gender
  const gender = document.querySelector("#gender").value;

  if (firstName == "" || firstName == null) {
    alert("First Name should not be empty!");
    return false;
  } else if (firstName.length < 2) {
    alert("First Name should be greater than two characters!");
    return false;
  } else if (lastName == "" || lastName == null) {
    alert("Last Name should not be empty!");
    return false;
  } else if (lastName.length < 2) {
    alert("Last Name should be greater than 2 characters!");
    return false;
  } else if (email.length == "" || email.length == null) {
    alert("Email should not be empty!");
    return false;
  } else if (
    atPosition < 1 ||
    dotPosition < atPosition + 2 ||
    dotPosition + 2 >= email.length
  ) {
    alert("Invalid email!");
    return false;
  } else if (phoneNumber.length == "" || phoneNumber.length == null) {
    alert("Phone Number should not be empty!");
    return false;
  } else if (phoneNumber.length != 10) {
    alert("Phone Number must be 10 characters!");
    return false;
  } else if (Password.length == "" || Password.length == null) {
    alert("Password should not be empty!");
    return false;
  } else if (Password.length < 8) {
    alert("Password should be greater than 8 characters!");
    return false;
  } else if (confirmPassword != Password) {
    alert("Password and Confirm Password must be matched!");
    return false;
  } else if (gender.length == "" || gender.length == null) {
    alert("You must select male or female!");
    return false;
  } else {
    alert("Your registration has been successful!");
    return true;
  }
}

// Log In Logic:
function logInForm() {
  const uname = document.querySelector("#uname").value.trim();
  const pass = document.querySelector("#pass").value.trim();

  if (uname == "" || uname == null) {
    alert("Username should not be empty!");
    return false;
  } else if (uname.length < 2) {
    alert("Username should be greater than two characters!");
    return false;
  } else if (pass == "" || pass == null) {
    alert("Password should not be empty!");
    return false;
  }
}
