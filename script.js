let nameFirst = prompt(
  "Enter the name of the first person you want to compare."
);
let massFirst = prompt("Enter the mass of the first person in kg.");
let heightFirst = prompt("Enter the height of the first person in meter.");
let nameSecond = prompt(
  "Enter the name of the second person you want to compare."
);
let massSecond = prompt("Enter the mass of the second person in kg.");
let heightSecond = prompt("Enter the height of the second person in meter.");

let BMIFirst = Math.floor(massFirst / (heightFirst * heightFirst));
let BMISecond = Math.floor(massSecond / (heightSecond * heightSecond));
console.log(BMIFirst, BMISecond);

const higherBMI = BMIFirst > BMISecond;
if (higherBMI) {
  alert(
    `Is ${nameFirst}'s BMI higher than ${nameSecond}'s? Answer is "true". Because ${nameFirst}'s BMI is ${BMIFirst} and ${nameSecond}'s BMI is ${BMISecond}.`
  );
} else {
  alert(
    `Is ${nameFirst}'s BMI higher than ${nameSecond}'s? Answer is "false". Because ${nameFirst}'s BMI is ${BMIFirst} and ${nameSecond}'s BMI is ${BMISecond}.`
  );
}
