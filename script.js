function countdown(num, callback) {
    var countdownDiv = document.getElementById("countdown");
    
    var countdownInterval = setInterval(function() {
      countdownDiv.innerText = num;
      num--;
      
      if (num < 0) {
        clearInterval(countdownInterval);
        callback();
      }
    }, 1000);
  }
  
  countdown(10, function() {
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.innerText = "HAPPY INDEPENDENCE DAY!";
  });