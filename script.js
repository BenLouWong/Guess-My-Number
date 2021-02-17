'use strict';

// https://www.w3schools.com/jsref/met_document_queryselector.asp
//  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

let secret = Math.trunc(Math.random() * 20) + 1; // Math.random() only generates a number between 0 and 1 //Math.trunc() rounds the number to the nearest integer
let score = 20;
// document.querySelector('.number').textContent = secret;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// https://developer.mozilla.org/en-US/docs/Web/API/EventListener
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secret) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secret;
    // Manipulation css elements such as colour
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > secret) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :(';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secret) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :(';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1; // Math.random() only generates a number between 0 and 1 //Math.trunc() rounds the number to the nearest integer
  score = 20;

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Recap:
// 1. We selected the button "check" using the querySelector method. We then used the "addEventListener" to attach an event handle
// 2. We called the "type" of the event, which is "click"
// 3. We called the "reaction" to the click event, which is calling the function. In this case, the function is called an "event handler"
// 4. We created the function code that executes whenever the click happens. In this case, the value that is in the "guess" box will be passed to the console everytime the "check" button is clicked
// 5. We assigned the function code to a variable
// 6. We created an if statement that was passed everytime the guess box was empty
// 7. We created an if statement that passes if our "guess" is the same as the if statement, stores the high score and changes the ? secret number to display the secret number
// 8. Likewise, we created an if statement that decreased the score if the guess was too high or too low from the secret number. When the score reached 0 we passed the message "you lost" into the message box
// 9. We made the "again" button functional to return everything to the original state
