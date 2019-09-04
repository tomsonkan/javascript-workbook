'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
let start = stacks[startStack];
//define which array you want to remove from 
let end = stacks[endStack];
//define which array you want to add to
let lastNumber = start.pop();
//remove last number in starting stack
  console.log(lastNumber);
end.push(lastNumber);
//add to last number in ending stack
  console.log(end);
checkForWin();
//reset()
}

function isLegal(startInput, endInput) {
    console.log('start', startInput)
    console.log('end', endInput)
  let endlastElement = endInput[endInput.length - 1];
  //define last number in the end stack
    console.log(startInput[startInput.length-1] < endlastElement || endlastElement === undefined)
  if(startInput[startInput.length-1] < endlastElement || endlastElement === undefined) {
  //if last value of start stack is < last value in the end stack or if the last element is undefined 
    console.log(endlastElement);
    console.log('here2')
    return true;
  } else {
    console.log('here')
    return false;
  }
}



function checkForWin() {
  let stacksWinB = stacks.b.length 
  let stacksWinC = stacks.c.length;
  let stacksa = stacks.a
  let stacksb = stacks.b
  let stacksc = stacks.c
// if stack b or c has more than 3 numbers, then Winner!!!
  
  if (stacksWinB > 3) {
    console.log("Winner!!!!");
    stacksb.splice(0, 4);
    stacksa.push(4, 3, 2, 1);
// splice all elements from row b and push onto row a
    return true
  }  else if(stacksWinC > 3) {
    console.log("Winner!!!!");
    stacksc.splice(0, 4);
    stacksa.push(4, 3, 2, 1);
// splice all elements from row c and push onto row a
  }
  else {
    return false}

}


//parent function
function towersOfHanoi(startStack, endStack) {
  const startInput = stacks[startStack];
  //define starting stack
  const endInput = stacks[endStack];
  //define ending stack
  if (isLegal(startInput, endInput)) {
      movePiece(startStack, endStack);
  // if move is legal then allow the piece to be moved    
  }
  else {
    console.log('invalid')
    return false
  // otherwise it is invalid
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
  //ask for starting stack
    rl.question('end stack: ', (endStack) => {
    //ask for ending stack
      towersOfHanoi(startStack, endStack);
      //then run the parent function
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
