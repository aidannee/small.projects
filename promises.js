// promises resolve, reject, promise.all and google-fu
// this is an exercise about finding stuff through google
// ( and also practicin promises )
// this is a totally blank exercise where you have
// to rely on googling and copying code from earlier

// EXERCISE 1
// start one Promise, that has a setTimeout of 2 seconds
// after the setTimeout, console.log "promise 1 is finished"

let a = 3;
function promOne(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (x <= 4) {
        return resolve();
      } else {
        return reject("number must be less than 4");
      }
    }, 2000);
  });
}
promOne(a)
  .then(function () {
    console.log("promise 1 is finished");
  })
  .catch((e) => console.log(e));

// EXERCISE 2
// start one Promise, that has a setTimeout of 4 seconds
// make it fail (with a reject)
// after the setTimeout, console.log "promise 2 is finished"

let b = 7;
function promTwo(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (x <= 4) {
        return resolve("promise 2 is finished");
      } else {
        return reject("number must be less than 4");
      }
    }, 4000);
  });
}
promTwo(b)
  .then((e) => console.log(e))
  .catch(function (e) {
    console.log(e);
  });

// promTwo();
// EXERCISE 3
// imagine you have lots of asynchronous things happening at the same time,
// and you need to wait for all of them to finish before you can continue
// this is where Promise.all comes in handy!

// I want you to start 3 separate promises.
// one that has a setTimeout of 2 seconds
// one that has a setTimeout of 4 seconds
// one that has a setTimeout of 6 seconds

// after all 3 have finished, console.log "all promises are finished"
// to do this, you'll need to use promise.all
// try googling "promise.all examples" and see what you can find

//
//
//

//
