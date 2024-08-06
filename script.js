// Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('register-error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    errorMessage.textContent = '';

    // Submit registration data to Google Sheets
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1VyKhvWEB0siK2IjeT-Uc7Fd9WV_doTpJ00Esx1N6AII/values/Sheet1!A1:D1:append?valueInputOption=RAW&key=AIzaSyDkx86e1n61FupXIvngVJ2ARcJ1AMuwD-4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            range: 'Sheet1!A1:D1',
            majorDimension: 'ROWS',
            values: [[username, email, password]],
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'Registration failed. Please try again.';
    });
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error-message');

    // Fetch data from Google Sheets to verify login
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1VyKhvWEB0siK2IjeT-Uc7Fd9WV_doTpJ00Esx1N6AII/values/Sheet1?key=AIzaSyDkx86e1n61FupXIvngVJ2ARcJ1AMuwD-4')
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            const user = rows.find(row => row[1] === email && row[2] === password);

            if (user) {
                alert('Login successful!');
                // Redirect or perform actions on successful login
            } else {
                errorMessage.textContent = 'Invalid email or password.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.textContent = 'Login failed. Please try again.';
        });
});
