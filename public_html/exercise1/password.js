function validate(password1,password2) {
  if(password1 == password2 && password1.length >= 8 && password2.length >= 8) {
    alert("Passwords Match!");
  }
  else {
    if(password1.length <= 8 || password2.length <= 8) {
      alert("Password must be at least 8 characters. Try again");
    }
    else {
      alert("Passwords do not match. Try again");
    }
  }
}
