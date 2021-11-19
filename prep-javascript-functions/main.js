function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return (60) * (hours);
}

var sumConvertHoursToMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes', sumConvertHoursToMinutes);

function getGreeting(name) {
  return 'Hello ' + (name);
}

var greeting = getGreeting('World!');
console.log(greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var sumAddAndMultiplyBy5 = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5', sumAddAndMultiplyBy5);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var sumMultiplyAndDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5', sumMultiplyAndDivideBy5);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var sumSubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers', sumSubtractTwoNumbers);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}
var sumGetCircleCircumference = getCircleCircumference(5);
console.log('getCircleCircumference', sumGetCircleCircumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

var sumGetFullName = getFullName('Dustin ', 'Davis');
console.log('getFullName', sumGetFullName);

function cube(x) {
  return x * x * x;
}

var sumCube = cube(5);
console.log('cube', sumCube);
