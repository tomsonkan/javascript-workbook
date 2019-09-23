'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//swwitch to red checker if playerTurn is for the black checker
function nextTurn () {
  if(playerTurn === blackChecker) {
    playerTurn = redChecker
  } else {
    playerTurn = blackChecker
  }
}

// if color is red then assign "r" and if color is black assign "b"
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

//end piece needs to be empty
const isEmpty = (endx, endy) => {
  if(game.board.grid[endx][endy] === null){
    return true;
  }
}

//identify checker pieces
const redChecker = new Checker('red');
const blackChecker = new Checker('black');
let playerTurn = blackChecker;

//validMove has to be forward and diagonal
const validMove = function (startx, starty, endx, endy, whichPiece, toWhere) {
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
        // row number has to be less than 3
         for (let c = 0; c < 8; c++) {
           //column number has to be less than 8
           if ((r % 2 == 0) && (c % 2 != 0)) {
             //put piece here for even number rows and odd columns
            this.grid[r][c] = redChecker
            this.checkers.push(redChecker)
           } else if ((r % 2 != 0) && (c % 2 == 0)) {
             //put piece here for odd number rows and even columns
             this.grid[r][c] = redChecker
             this.checkers.push(redChecker)
           }
          }
        } else if (r > 4) {
          // row number has to be less than 3
            for (let c = 0; c < 8; c++) {
              //column number has to be less than 8
              if ((r % 2 == 0) && (c % 2 != 0)) {
                //put piece here for even number rows and odd columns
               this.grid[r][c] = blackChecker
               this.checkers.push(blackChecker)
              } else if ((r % 2 != 0) && (c % 2 == 0)) {
                //put piece here for odd number rows and even columns
                this.grid[r][c] = blackChecker
                this.checkers.push(blackChecker)
          }  
        }
      }
    } console.log(this.checkers.length)
  }
  jumpPiece (startx, starty, whichPiece, toWhere) {
    // console.log(whichPiece - toWhere === 18 || whichPiece - toWhere === -18 || whichPiece - toWhere === 22 || whichPiece - toWhere === -22 , " jumpPiece")
    // console.log(starty - 1, parseInt(startx) + 1 , "check")
    // console.log( playerTurn === blackChecker)
    if (whichPiece - toWhere === 18 || whichPiece - toWhere === -18 || whichPiece - toWhere === 22 || whichPiece - toWhere === -22) {
      // console.log(this.grid[starty - 1][parseInt(startx) - 1])
      // console.log(this.grid[starty - 1][parseInt(startx) + 1])
      // console.log( (this.grid[starty - 1][parseInt(startx) - 1] !== null) + " hello")
      // console.log( (this.grid[starty - 1][parseInt(startx) + 1] !== null) + " hello2")
      // console.log((this.grid[starty - 1][parseInt(startx) - 1].color !== playerTurn.color) + "hello3")
      // console.log((this.grid[starty - 1][parseInt(startx) + 1].color !== playerTurn.color) + "hello3")
//
        if(playerTurn === blackChecker && playerTurn === this.grid[whichPiece[0]][whichPiece[1]] && ((this.grid[starty - 1][parseInt(startx) - 1] !== null && this.grid[starty - 1][parseInt(startx) - 1].color !== playerTurn.color) || (this.grid[starty - 1][parseInt(startx) + 1] !== null && this.grid[starty - 1][parseInt(startx) + 1].color !== playerTurn.color))) {
          console.log('wahh', playerTurn)
          let x = this.grid[whichPiece[0]][whichPiece[1]];
          this.grid[whichPiece[0]][whichPiece[1]] = null;
          this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) + 1] = null;
          this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) - 1] = null;
          console.log(this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) + 1])
          console.log(this.grid[whichPiece[0] - 1][parseInt(whichPiece[1]) - 1])
          this.grid[toWhere[0]][toWhere[1]] = x;
          this.checkers.splice(this.checkers.indexOf(this.grid[starty][startx]))
          console.log(this.checkers.length + "hello")
          ; 
        } else 
          if (playerTurn === redChecker && playerTurn === this.grid[whichPiece[0]][whichPiece[1]] && ((this.grid[starty - 1][parseInt(startx) - 1] !== null && this.grid[parseInt(starty) + 1][parseInt(startx) + 1].color !== playerTurn.color) || (this.grid[parseInt(starty) + 1][parseInt(startx) - 1] !== null && this.grid[parseInt(starty) + 1][parseInt(startx) - 1].color !== playerTurn.color))) {
          let x = this.grid[whichPiece[0]][whichPiece[1]];
          this.grid[parseInt(starty)][parseInt(startx)] = null;
          console.log("ayhekas", playerTurn)
          console.log(this.grid[parseInt(starty) + 1][parseInt(whichPiece[1]) - 1])
          this.grid[parseInt(starty) + 1][parseInt(startx) + 1] = null;
          this.grid[parseInt(starty) + 1][parseInt(startx) - 1] = null;
          this.grid[toWhere[0]][toWhere[1]] = x;
          this.checkers.splice(this.checkers.indexOf(this.grid[starty][startx]))
          console.log(this.checkers.length + "hello2")     
    }
  } 
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
    //split whichPiece into two numbers
    let start = whichPiece.split("");
    //split toWhere into two numbers
    let end = toWhere.split("");
    //starty is the first number
    let starty = start[0];
    //startx is second number
    let startx = start[1];
    //endy is first number
    let endy = end[0];
    //endx is second number
    let endx = end[1];
    console.log(this.board.grid[starty - 1][startx - 1])

    
    //has to input a valid move 
    if(validMove(startx, starty, endx, endy, whichPiece, toWhere)){
        console.log("EACH MOVE", playerTurn)
        // x determines which piece is selected
        let x = this.board.grid[whichPiece[0]][whichPiece[1]];
        // the location of the selected piece will be null once moved
        this.board.grid[whichPiece[0]][whichPiece[1]] = null;
        //to where on the board the user inputs, the selected piece will be moved 
        this.board.grid[toWhere[0]][toWhere[1]] = x;
        //after the piece is moved, it switches to the other players turn
        nextTurn();
      } else if (startx - endx == 2 || endx - startx == 2) {
        console.log("EACH MOVE", playerTurn)
        //if it is not just a normal valid move, it checks if it is to jumpPiece the opponent.
        this.board.jumpPiece(startx, starty, whichPiece, toWhere)
        nextTurn()
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
