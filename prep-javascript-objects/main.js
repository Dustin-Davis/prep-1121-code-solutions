var person = {
  firstName: 'Dustin ',
  lastName: 'Davis',
  hobby: 'coding'
};
console.log(person);
var text1 = person.firstName;
var text2 = person.lastName;
var fullName = text1 + text2;
console.log('This persons name is :', fullName);

person.job = 'Instructional Aid';
console.log('The persons current job is:', person.job);

person.previousJob = 'Cook at a restaurant';
console.log("The person's previous job was :", person.previousJob);

console.log(person);
