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
let end = stacks[endStack];
let lastNumber = start.pop();
console.log(lastNumber);
end.push(lastNumber);
console.log(end);

  // let start = startStack;
  // let end = endStack;
  // let stackA = stacks.a;
  // let stackB = stacks.b;
  // if ((start === "a" && end === "b")) {
  // stackA.pop();
  // stackB.push();
  // console.log(stacks.a)
  //}
}

function isLegal(startInput, endInput) {
  // Your code here
  // let start = stacks[startStack];
  // let end = stacks[endStack];
  let endlastElement = endInput[endInput.length - 1];
  console.log(startInput[startInput.length-1] < endlastElement || endlastElement === undefined)
  if(startInput[startInput.length-1] < endlastElement || endlastElement === undefined) {
  console.log(endlastElement);
  return true;
  } else {
    return false;
  }
  
}

function checkForWin() {
  // Your code here
  

}
//parent function
function towersOfHanoi(startStack, endStack) {
  // Your code here
  const startInput = stacks[startStack];
  const endInput = stacks[endStack];
  if (isLegal(startInput, endInput)) {
      movePiece(startStack, endStack);
  }
  else {
    console.log('invalid')
    return false
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
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
