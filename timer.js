// ! FIRST EXERCISE
// let clock = document.querySelector("#clock");
// let counter = 0;
// setInterval(() => {
//   counter++;
//   let minutes = Math.floor(counter / 60);
//   let seconds = counter % 60;
//   clock.innerHTML = minutes + ":" + seconds;
// }, 1000);

// ! SECOND EXERCISE
// let clock = document.querySelector("#clock");
// let timeInput = document.querySelector("#timeInput");
// let submitTime = document.querySelector("#submitTime");
// let counter = 0;

// submitTime.addEventListener("click", function (e) {
//   setInterval(() => {
//     clock.innerHTML = timeInput.value--;
//   }, 1000);
// });

// ! THIRD EXERCISE
let clock = document.querySelector("#clock");
let timeInput = document.querySelector("#timeInput");
let submitTime = document.querySelector("#submitTime");
let counter = 0;

submitTime.addEventListener("click", manageTimer);

function startTimer(userInput) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      if (userInput <= 0) {
        resolve();
      } else {
        clock.innerHTML = userInput = userInput - 1;
      }
    }, 1000);
    timeInput.value = "";
  });
}

function manageTimer() {
  startTimer(timeInput.value).then(() => alert("timer is finished"));
}
