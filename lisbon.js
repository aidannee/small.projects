let ourUl = document.querySelector("ul");

fetch("http://hn.algolia.com/api/v1/search?query=lisbon")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const stories = data.hits;

    // console.log(stories);
    const listItems = stories
      .map((item) => {
        console.log(item);
        return `<li class="list-group-item"><a href="${item.url}">${item.title}</a></li>`;
      })
      .join("");
    // console.log(listItems);
    ourUl.innerHTML = listItems;
  });

// todo WEATHER

const lat = 38.736946;
const lon = -9.142685;
let header = document.querySelector("header");
fetch(
  "https://www.7timer.info/bin/astro.php?lon=" +
    lon +
    "&lat=" +
    lat +
    "&ac=0&unit=metric&output=json&tzshift=0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let totalTemps = 0;
    // console.log(data);
    data.dataseries.forEach((element) => {
      totalTemps += element.temp2m;
    });
    let averageTemp = Math.floor(totalTemps / data.dataseries.length);
    console.log(averageTemp);
    let headerTempInfo = document.createElement("div");
    headerTempInfo.innerHTML = `The average temperature today is ${averageTemp} degrees`;
    headerTempInfo.classList.add("display-3");

    header.append(headerTempInfo);
    if (averageTemp >= 15) {
      let sun = document.createElement("p");
      sun.innerHTML = "&#127774;";
      sun.classList.add("display-6");

      header.append(sun);
    } else {
      let cloud = document.createElement("p");
      cloud.innerHTML = "&#127781;";
      cloud.classList.add("display-6");

      header.append(cloud);
    }
  });
