const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", fetchNewsData);

function fetchNewsData(e) {
  let results = [];

  // ASYNCHRONOUS - it takes an unpredictable amount of time to finish
  fetch("http://hn.algolia.com/api/v1/search?query=pizza")
    // fetch always returns a "Response Object"
    // we want the "body" of it, in JSON format
    .then((responseObject) => responseObject.json())
    // after that transformation/collection of the JSON data, we
    // are ready to use it in our program..
    .then((pizza) => {
      results = pizza.hits;
      console.log("if we wait..", pizza.hits);
    });
  // if we try to get the "pizza" too soon and dont wait,
  // it is empty of course. we have to wait for the outside
  // world.

  console.log("if we don't wait", results);

  // synchronous
  // this kinda simple code doesn't need to be waited for
  const username = "Bob";
  console.log(username);
}

const amazingPresentation = `
    
    synchronous = happening at the same time 
    asynchronous = not ^^^^


    Asynchronous Programming 

    step 1 - pick up the phone and you call the restaurant
    step 2 - go to the front door of your house and open the door

    FAIL 
    step 1.5 - WAIT for 30 minutes


    in the real world you need to wait for things . time. 

    programming exists - in the real world

    PROMISES - the javascript way of waiting
`;
