'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nextTurn () {
  if(playerTurn === blackChecker) {
    playerTurn = redChecker
  } else {
    playerTurn = blackChecker
  }
}

class Checker {
  constructor (color){
    if(color === 'red'){
      this.symbol = 'r';
      this.color = color;
    } else {
      this.symbol = 'b';
      this.color = color;
    }
  }
}

const isEmpty = (endx, endy) => {
  if(game.board.grid[endx][endy] === null){
    return true;
  }
}

const redChecker = new Checker('red');
const blackChecker = new Checker('black');
let playerTurn = blackChecker;

const validMove = function (startx, starty, endx, endy, whichPiece, toWhere) {
  // if(validMove(startx, starty, endx, endy, whichPiece, toWhere)){

  if(playerTurn === blackChecker) {
    console.log(starty, endy)
    console.log ((starty - endy === 1))
    if(((startx - endx === -1) || (startx - endx === 1)) && (starty - endy === 1) && endx < 8 && endy < 8) {
      return true
    }  
  } else if (playerTurn === redChecker) {
      if(((startx - endx === -1) || (startx - endx === 1)) && (starty - endy === -1) && endx < 8 && endy < 8) {
        return true } 
  }else return false
}


// function Checker() {
//   // Your code here
// }

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
   setPieces(){
     for (let r = 0; r < 8; r++){
       if( r < 3) {
         for (let c = 0; c < 8; c++) {
           if ((r % 2 == 0) && (c % 2 != 0)) {
             //put piece here
            this.grid[r][c] = redChecker
            this.checkers.push(redChecker)
           } else if ((r % 2 != 0) && (c % 2 == 0)) {
             //put other piece
             this.grid[r][c] = redChecker
             this.checkers.push(redChecker)
           }
          }
        } else if (r > 4) {
            for (let c = 0; c < 8; c++) {
              if ((r % 2 == 0) && (c % 2 != 0)) {
                //put piece here
               this.grid[r][c] = blackChecker
               this.checkers.push(blackChecker)
              } else if ((r % 2 != 0) && (c % 2 == 0)) {
                //put other piece
                this.grid[r][c] = blackChecker
                this.checkers.push(blackChecker)
          }  
        }
      }
    } console.log(this.checkers.length)
  } 
} 

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.setPieces();
  }
  moveChecker(whichPiece, toWhere) {
    let start = whichPiece.split("");
    let end = toWhere.split("");
    let starty = start[0];
    let startx = start[1];
    let endy = end[0];
    let endx = end[1];

    if(validMove(startx, starty, endx, endy, whichPiece, toWhere)){
      
        let x = this.board.grid[whichPiece[0]][whichPiece[1]];
        this.board.grid[whichPiece[0]][whichPiece[1]] = null;
        this.board.grid[toWhere[0]][toWhere[1]] = x;

        //this.board.splice(this.checkers.indexOf(this.grid[startx][starty]));
        nextTurn();

  }
}
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
