document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Here you can add login logic, e.g., send data to a server
    console.log({
        email: email,
        password: password
    });

    alert('Login successful!');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    errorMessage.textContent = '';

    // Here you can add registration logic, e.g., send data to a server
    console.log({
        username: username,
        email: email,
        password: password
    });

    alert('Registration successful!');
});
