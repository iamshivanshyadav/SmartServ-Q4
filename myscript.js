function validateEmail(username) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.querySelector('#email').value;
   const isValidEmail = validateEmail(usernameInput);

  if (isValidEmail) {
    console.log("Username is in email format.");
    const enteredPassword = document.getElementById('password').value;
      const correctPassword = 'SmartServTest@123';

      if (enteredPassword === correctPassword) {
        window.location.href = 'dashboard.html';
      } else {
        alert('Incorrect password. Please try again.');
      }
  } else {
    console.log("Username is not in email format.");
    alert("Username is not in email format.");
  }

      
  });
