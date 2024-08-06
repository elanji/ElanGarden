// Register Page Validation
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username')?.value;
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const errorMessage = document.getElementById('register-error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    errorMessage.textContent = '';
    console.log({ username, email, password });
    alert('Registration successful!');
});

// Login Page Validation
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    const errorMessage = document.getElementById('login-error-message');

    if (!email || !password) {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }

    errorMessage.textContent = '';
    console.log({ email, password });
    alert('Login successful!');
});
