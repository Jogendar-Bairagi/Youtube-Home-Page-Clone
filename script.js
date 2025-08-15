// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Make API call to backend to authenticate user
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // User authenticated, redirect to account page
      window.location.href = '/account';
    } else {
      // User not authenticated, display error message
      alert('Invalid username or password');
    }
  })
  .catch((error) => {
    console.error(error);
  });
});