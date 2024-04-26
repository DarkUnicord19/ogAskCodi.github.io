document.getElementById('yesButton').addEventListener('click', function() {
    displayResult("Congratulations! Squidward's heart is yours!");
  });
  
  document.getElementById('noButton').addEventListener('click', function() {
    displayResult("Sorry, Squidward's heart remains untouched.");
  });
  
  document.getElementById('idkButton').addEventListener('click', function() {
    displayResult("Indecision won't win Squidward's heart.");
  });
  
  function displayResult(message) {
    document.getElementById('result').innerText = message;
  }
  