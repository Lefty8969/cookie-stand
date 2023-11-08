"use strict";

function Town(name, minHourlyCustomers, maxHourlyCustomers, averageSale) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageSale = averageSale;
  this.randomCustomers = [];
  this.cookieGenerator = [];
  this.totalSold = 0;
}


Town.prototype.getRandomCustomers = function () {
  return Math.floor(
    Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) +
      this.minHourlyCustomers
  );
};

Town.prototype.hourlyData = function () {
  this.totalSold = 0;
  for (let hour = 6; hour <= 19; hour++) {
    this.randomCustomers.push(this.getRandomCustomers());
    this.cookieGenerator.push(
      Math.round(this.randomCustomers[hour - 6] * this.averageSale)  // Fixed here
    );
    this.totalSold += this.cookieGenerator[hour - 6];
  }
};

Town.prototype.render = function(){
  let body = document.getElementById('Town');
  let frontStore = document.createElement('tr');
  body.appendChild(frontStore);

  let nameBox = document.createElement('td');
  nameBox.textContent = this.name;
  frontStore.appendChild(nameBox);

  for (let i = 0; i < this.cookieGenerator.length; i++) {  // Fixed here CHatG
    let hrCell = document.createElement('td');
    hrCell.textContent = this.cookieGenerator[i];  // Fixed here chatG
    frontStore.appendChild(hrCell);
  }

  let totalBox = document.createElement('td');
  totalBox.textContent = this.totalSold;
  frontStore.appendChild(totalBox);
};


// (Your Town.prototype methods) chatGpt


const seattle = new Town("seattle", 23, 65, 6.3);
const tokyo = new Town("tokyo", 3, 24, 1.2);
const dubai = new Town("dubai", 11, 38, 3.7);
const paris = new Town("paris", 20, 38, 2.3);
const lima = new Town("lima", 2, 16, 4.6);

seattle.hourlyData();
tokyo.hourlyData();
dubai.hourlyData();
paris.hourlyData();
lima.hourlyData();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();












// const seattle = {
//   name: "Seattle",
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   averageSale: 6.3,
//   cookies: [],

// };

// for (let hour = 6; hour <= 19; hour++) {
//   const noOfCustomsers = getRandomCustomers(
//     seattle.minHourlyCustomers,
//     seattle.maxHourlyCustomers
//   );

//   let noOfCookies = Math.ceil(noOfCustomsers * seattle.averageSale);

//   seattle.cookies.push(noOfCookies);
// }





// DOM Manipulation
// const seattleListEl = document.getElementById("seattle-list");
// let total = 0;

// for (let index = 0; index <= 13; index++) {
//   console.log("seattle cookies", seattle.cookies[index]);
//   console.log(typeof seattle.cookies[index]);
//   let li = document.createElement("li"); // <li></li>

//   total += seattle.cookies[index];

// let amPm = "am";
// let currentHour = index + 6;

// if (currentHour > 11) {
//   amPm = "pm";
// }

// 13 =>1, 14=>2, 15=>3

//   if (currentHour > 12) {
//     currentHour = currentHour - 12;
//   }

//   let formatedTime = currentHour + amPm;
//   li.innerText = formatedTime + ": " + seattle.cookies[index] + " cookies"; // <li>234</li>
//   seattleListEl.appendChild(li);
// }
// let renderTotal = document.createElement("li");
// renderTotal.textContent = `Total: ${total} Cookies`;
// seattleListEl.appendChild(renderTotal);

// const tokyo = {
//   name: "Tokyo",
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageSale: 1.2,
//   cookies: [],

// };

// for (let hour = 6; hour <= 19; hour++) {
// console.log(`Hour ${hour}:00`);
// console.log(hour);
// for seatle
// we use (.) to get the value of any key in the object.
//   const noOfCustomsers = getRandmonCustomers(
//     tokyo.minHourlyCustomers,
//     tokyo.maxHourlyCustomers
//   );

//   let noOfCookies = Math.ceil(noOfCustomsers * tokyo.averageSale);

//   tokyo.cookies.push(noOfCookies);
// }

// DOM Manipulation
// const tokyoListEl = document.getElementById("tokyo-list");
// let tokyoTotal = 0;

// for (let index = 0; index <= 13; index++) {
//   console.log("tokyo cookies", tokyo.cookies[index]);
//   console.log(typeof tokyo.cookies[index]);
//   let li = document.createElement("li"); // <li></li>

//   tokyoTotal += tokyo.cookies[index];

//   let amPm = "am";
//   let currentHour = index + 6;

//   if (currentHour > 11) {
//     amPm = "pm";
//   }

//   // 13 =>1, 14=>2, 15=>3

//   if (currentHour > 12) {
//     currentHour = currentHour - 12;
//   }

//   let formatedTime = currentHour + amPm;
//   li.innerText = formatedTime + ": " + tokyo.cookies[index] + " cookies"; // <li>234</li>
//   tokyoListEl.appendChild(li);
// }
// let renderTokyoTotal = document.createElement("li");
// renderTokyoTotal.textContent = `Total: ${tokyoTotal} Cookies`;
// tokyoListEl.appendChild(renderTokyoTotal);

// const dubai = {
//   name: "Dubai",
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   averageSale: 3.7,
//   cookies: [],
// };

// for (let hour = 6; hour <= 19; hour++) {
//   const noOfCustomsers = getRandmonCustomers(
//     dubai.minHourlyCustomers,
//     dubai.maxHourlyCustomers
//   );

//   let noOfCookies = Math.ceil(noOfCustomsers * dubai.averageSale);

//   dubai.cookies.push(noOfCookies);
// }

// DOM Manipulation
// const dubaiListEl = document.getElementById("dubai-list");
// let dubaiTotal = 0;

// for (let index = 0; index <= 13; index++) {
//   console.log("dubai cookies", dubai.cookies[index]);
//   console.log(typeof dubai.cookies[index]);
//   let li = document.createElement("li"); // <li></li>

//   dubaiTotal += dubai.cookies[index];

//   let amPm = "am";
//   let currentHour = index + 6;

//   if (currentHour > 11) {
//     amPm = "pm";
//   }

// 13 =>1, 14=>2, 15=>3

//   if (currentHour > 12) {
//     currentHour = currentHour - 12;
//   }

//   let formatedTime = currentHour + amPm;
//   li.innerText = formatedTime + ": " + dubai.cookies[index] + " cookies"; // <li>234</li>
//   dubaiListEl.appendChild(li);
// }
// let renderDubaiTotal = document.createElement("li");
// renderDubaiTotal.textContent = `Total: ${dubaiTotal} Cookies`;
// dubaiListEl.appendChild(renderDubaiTotal);

// const paris = {
//   name: "Paris",
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   averageSale: 2.3,
//   cookies: [],
// };
// for (let hour = 6; hour <= 19; hour++) {
// console.log(`Hour ${hour}:00`);
// console.log(hour);
// for seatle
// we use (.) to get the value of any key in the object.
//   const noOfCustomsers = getRandmonCustomers(
//     paris.minHourlyCustomers,
//     paris.maxHourlyCustomers
//   );

//   let noOfCookies = Math.ceil(noOfCustomsers * paris.averageSale);

//   paris.cookies.push(noOfCookies);
// }

// // DOM Manipulation
// const parisListEl = document.getElementById("paris-list");
// let parisTotal = 0;

// for (let index = 0; index <= 13; index++) {
//   console.log("paris cookies", paris.cookies[index]);
//   console.log(typeof paris.cookies[index]);
//   let li = document.createElement("li"); // <li></li>

//   parisTotal += paris.cookies[index];

//   let amPm = "am";
//   let currentHour = index + 6;

//   if (currentHour > 11) {
//     amPm = "pm";
//   }

//   // 13 =>1, 14=>2, 15=>3

//   if (currentHour > 12) {
//     currentHour = currentHour - 12;
//   }

//   let formatedTime = currentHour + amPm;
//   li.innerText = formatedTime + ": " + paris.cookies[index] + " cookies"; // <li>234</li>
//   parisListEl.appendChild(li);
// }
// let renderParisTotal = document.createElement("li");
// renderParisTotal.textContent = `Total: ${parisTotal} Cookies`;
// parisListEl.appendChild(renderParisTotal);

// const lima = {
//   name: "Lima",
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   averageSale: 4.6,
//   cookies: [],
// };
// for (let hour = 6; hour <= 19; hour++) {
// console.log(`Hour ${hour}:00`);
// console.log(hour);
// for seatle
// we use (.) to get the value of any key in the object.
//   const noOfCustomsers = getRandmonCustomers(
//     lima.minHourlyCustomers,
//     lima.maxHourlyCustomers
//   );

//   let noOfCookies = Math.ceil(noOfCustomsers * dubai.averageSale);

//   lima.cookies.push(noOfCookies);
// }

// // DOM Manipulation
// const limaListEl = document.getElementById("lima-list");
// let limaTotal = 0;

// for (let index = 0; index <= 13; index++) {
//   console.log("lima cookies", lima.cookies[index]);
//   console.log(typeof lima.cookies[index]);
//   let li = document.createElement("li"); // <li></li>

//   limaTotal += lima.cookies[index];

//   let amPm = "am";
//   let currentHour = index + 6;

//   if (currentHour > 11) {
//     amPm = "pm";
//   }

// 13 =>1, 14=>2, 15=>3

//   if (currentHour > 12) {
//     currentHour = currentHour - 12;
//   }

//   let formatedTime = currentHour + amPm;
//   li.innerText = formatedTime + ": " + lima.cookies[index] + " cookies"; // <li>234</li>
//   limaListEl.appendChild(li);
// }
// let renderLimaTotal = document.createElement("li");
// renderLimaTotal.textContent = `Total: ${limaTotal} Cookies`;
// limaListEl.appendChild(renderLimaTotal);




