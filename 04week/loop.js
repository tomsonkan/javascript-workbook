'use strict';



//1. Use a do...while loop to console.log the numbers from 1 to 1000.

let number = 0;
do {
  number +=1
  console.log(number)
} while (number < 1000)

//2. Create an object (an array with keys and values) called 
// person with the following data:

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

//3. Use a for...in loop and if statement to console.log the value 
//associated with the key birthDate if the birth year is an odd number.


let bday = person.birthDate.split(" ")
console.log(person.birthDate.split(" "))
let year = bday.splice(2, 1)
console.log(year)

for (let i = 0; i < year.length; i++) {
  if (year % 2 !==0 ) {
    console.log(year)
  } else console.log("NA")
}

//4. Create an arrayOfPersons that contains mulitiple objects. 
//You can simply copy/paste the person object you made above multiple times. 
//Feel free to change the values to reflect multiple people you might have 
//in your database.

var arrayOfPersons = [ {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "02-21-1970",
    gender: "female"
    },
  {
    firstName: "Phil",
    lastName: "Lee",
    birthDate: "03-01-1990",
    gender: "male"
  },
  {
    firstName: "Lisa",
    lastName: "Smith",
    birthDate: "07-21-1998",
    gender: "female"
  },
  {
    firstName: "Jack",
    lastName: "Reese",
    birthDate: "02-13-1930",
    gender: "male"
  }];


//5. Use .map() to map over the arrayOfPersons and console.log() their 
//information.

let ppl = arrayOfPersons.map(info)

function info(item) {
  console.log(item)
};

//6. Use .filter() to filter the persons array and console.log only 
//males in the array.

var result = arrayOfPersons.filter(men => men.gender === "male");
console.log(result)

//7. Use .filter() to filter the persons array and console.log only people 
//that were born before Jan 1, 1990.

var filtered = arrayOfPersons.filter(filter_dates);

function filter_dates(event) {
  return event.birthDate < "03-01-1990";
}

console.log(filtered)

// var filtered = [];
// for (var i = 0; i < arrayOfPersons.length; i++) {
//     if (arrayOfPersons[i].birthDate == "22-02-2016") {
//         filtered.push(events[i]);
//     }
// }
