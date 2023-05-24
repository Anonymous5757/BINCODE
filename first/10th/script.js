function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    // Validate username
    if (
      !/[A-Z]/.test(username) ||
      !/[a-z]/.test(username) ||
      !/[0-9]/.test(username) ||
      !/[!@#$%^&*]/.test(username) ||
      username.length < 8
    ) {
      alert("Username should contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at least 8 characters long.");
      return false;
    }
  
    // Validate password
    if (
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*]/.test(password) ||
      password.length < 8
    ) {
      alert("Password should contain at least one uppercase letter, one special character, and be at least 8 characters long.");
      return false;
    }
  
    return true;
  }
  