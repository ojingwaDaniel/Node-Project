const amount = 12
if (amount < 10) {
    console.log('the number is small because is less than 10')
} else {
    console.log('congratulation you entered a number greater than 10')
}
console.log('Hey is my first Node App')
console.log(process)
setInterval(() => {
    console.log('Hey Im excited to learn Node js')
}, 1000)
/// require to get modules
const students = require('./name')
const greeting = require('./module')
const info = require('./module-alternative')
// importing without assigning to variable
require('./module-alternative')
console.log(students)
console.log(info)
greeting(students.john);
greeting(students.peter);
greeting('Daniel')
