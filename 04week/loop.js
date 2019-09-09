'use strict';

// let number = 0;

//Use a do...while loop to console.log the numbers from 1 to 1000.
// do {
//   number +=1
//   console.log(number)
// } while (number < 1000)

//Create an object (an array with keys and values) called person with the following data:

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

//Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.


let bday = person.birthDate.split(" ")
console.log(person.birthDate.split(" "))
let year = bday.splice(2, 1)
console.log(year)

for (let i = 0; i < year.length; i++) {
  if (year < 1924) {
    console.log(year)
  } else console.log("NA")
}

//Create an arrayOfPersons that contains mulitiple objects. 
//You can simply copy/paste the person object you made above multiple times. 
//Feel free to change the values to reflect multiple people you might have 
//in your database.

let arrayOfPersons = [ {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    },
  {
    firstName: "Phil",
    lastName: "Lee",
    birthDate: "Mar 15, 1955",
    gender: "male"
  },
  {
    firstName: "Lisa",
    lastName: "Smith",
    birthDate: "Jun 2, 1977",
    gender: "female"
  },
  {
    firstName: "Jack",
    lastName: "Reese",
    birthDate: "Oct 25, 1941",
    gender: "male"
  }
]

let first = arrayOfPersons.firstName
console.log(arrayOfPersons.firstName)

// arrayOfPersons.map ( function (first){
//   console.log(first.splice(1 , 1))
// })

// array1.map (function (number){
//   console.log (number * 2)}
// )

arrayOfPersons.filter (function (male) {
  let gen = arrayOfPersons.gender
  if( gen = male) {
    console.log(firstName)
  } else 
    console.log("None")
}

)
