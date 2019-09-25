// // console.log('hello');
// // for (let x = 1; x <= 33; x ++){
// //   console.log(x * 3);
// // }

// //create a for loop to print out every multiple of 3 up to 100.

// let age = 0

// do {
//   age += 1
//   console.log("You are " + age + " years old and cannot buy alchohol")
// } while (age <20)

// let grade = 0;
// while (grade < 70) {
//   grade += 30
//   console.log("You cannont move on until your grade is higher than" + grade )
// }


var array1 = [ 2, 3, 4, 4, 4, 5, 5, 6, 6, 7]
var array2 = [ 5, 3, 6, 7]

function multiply() {
for (let x = 0; x < array1.length; x++) {
  for(let y = 1; y < array2.length; y++) {
    if(array1[x] === array2[y])
    console.log(array2[y] * array1[x])
  }
}
} multiply()

array1.reduce(multiply)

  const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

  colors.forEach((color) => {
    console.log(`My favorite color is ${color}`);
  });

array1.forEach (function (number){
  console.log (number * 2)}
)

array1.map (function (number){
  console.log (number * 2)}
)
