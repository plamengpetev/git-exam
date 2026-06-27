// Authentication module
function login() {
    return true;
}

// Step 1 - Validate user credentials
function validateUser(username, password) {
    return username.length > 0 && password.length > 0;
}
