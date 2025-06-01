//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);

// Make sure #myList exists in your HTML (e.g., <ul id="myList"></ul>)
const listElement = document.querySelector("#myList");
if (listElement) {
  listElement.innerHTML = stepsHtml.join('');
} else {
  console.warn("Element with ID 'myList' not found in the HTML.");
}

// Activity 2 - map() to convert letter grades to GPA points
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") points = 4;
  else if (grade === "B") points = 3;
  else if (grade === "C") points = 2;
  else if (grade === "D") points = 1;
  else points = 0;
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
console.log("GPA Points:", gpaPoints);

// Activity 3 - reduce() to calculate average GPA
const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
console.log("GPA:", gpa);

// Activity 4 - filter() to keep short fruits
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortFruits = fruits.filter((fruit) => fruit.length < 6);
console.log("Short Fruits:", shortFruits);

// Activity 5 - indexOf() to find a number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky Number Index:", luckyIndex);
console.log("Allan Burton");
