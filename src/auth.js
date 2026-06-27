// Authentication module
function login() {
  return true;
}

// Step 1 - Validate user credentials
function validateUser(username, password) {
  return username.length > 0 && password.length > 0;
}

// Step 2 - Password validation
function validatePassword(password) {
  return password.length >= 8;
}

// Step 3 - Logout functionality
function logout() {
  return true;
}
