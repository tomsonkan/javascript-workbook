'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  let solutionArray = solution.split('')
  let guessArray = guess.split('')
  let correctLetterLocations = 0
  for (let i = 0; i < solutionArray.length; i++) {
      if (solutionArray[i] === guessArray[i]) {
         correctLetterLocations++;
         solutionArray[i] = null; 

      }
      }
      let correctLetters = 0
      for (let i = 0; i <solutionArray.length; i++) {
        let targetIndex = solutionArray.indexOf(guessArray[i])
        if (targetIndex > -1) {
          correctLetters++;
          solutionArray[targetIndex] = null;
        }
      }
      return `${correctLetterLocations}-${correctLetters}`;
      
}

// function addHint(guess) {
//   let hint = generateHint(guess);
//   board.push(hint)
// }

function mastermind(guess) {
   // Comment this out to generate a random solution
  // your code here
  const solution = 'abcd';

  //if (guess.length === 4 && guess !== solution) {
  //generateHint(guess)
  //} 
   if (solution === guess) {
    console.log("You guessed it!")
    return "You guessed it!"    
  } //else {
    else if (solution != guess) {
    let hint = generateHint(guess);
    board.push(`${guess}-${hint}`);
    console.log("try again");
    console.log(`${board.length}`)

    //return 'try again'
    
  } else if (board.length === 10) {

     console.log('You ran out of turns! The solution is ' && solution)
     return console.log('You ran out of turns! The solution is ' && solution)
   }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
