// Function for countdown
function countdown() {
    const ramadanDate = new Date('March 02, 2025 00:00:00').getTime(); // Adjust the date
    const now = new Date().getTime();
    const timeDifference = ramadanDate - now;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById('days').querySelector('.number').textContent = days;
    document.getElementById('hours').querySelector('.number').textContent = hours;
    document.getElementById('minutes').querySelector('.number').textContent = minutes;
    document.getElementById('seconds').querySelector('.number').textContent = seconds;
  
    if (timeDifference < 0) {
      document.querySelector('.countdown').innerHTML = "<h2>Ramadan is Here!</h2>";
    }
  }
  
  // Function to toggle theme
  function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  
    // Toggle icon
    if (body.classList.contains('dark-mode')) {
      themeIcon.textContent = '🌙'; // Moon icon for dark mode
    } else {
      themeIcon.textContent = '☀️'; // Sun icon for light mode
    }
  }
  
  // Initialize with dark mode
  window.onload = function() {
    document.body.classList.add('dark-mode'); // Start with dark mode
    countdown(); // Start countdown
    setInterval(countdown, 1000); // Update countdown every second
  }
  
