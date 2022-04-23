var countdown
var startBtn = document.querySelector(".start-button");
console.log(startBtn)
// Add event listener to generate button
startBtn.addEventListener("click", countdown);
var timerCount = document.querySelector('.timer-count')
var resetBtn = document.querySelector(".reset-button")
resetBtn.addEventListener("click", reset);
var timeLeft = 10;
var blanks = document.querySelector(".large-font word-blanks");
var win = document.querySelector(".win")
var loss = document.querySelector(".lose")

// Timer that counts down from 10
function countdown() {
  timeLeft = 10;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      timerCount.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerCount.textContent = timeLeft + ' second remaining';
      timeLeft--;

    } else if (timeLeft === 0) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerCount.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else {
  
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      window.alert("Game Over")
    }
  }, 1000);
}

function gamebegins() {
  
}