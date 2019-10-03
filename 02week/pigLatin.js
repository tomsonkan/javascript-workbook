'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
var newWord = word.toLowerCase().trim();
let vowels = [ "a", "e", "i", "o", "u"];
let splitWord = newWord.split("");
//let newWord = p1;
for(let j=0; j <= splitWord.length; j++) {
  for(let i=0; i <= vowels.length; i++) { 
    // if(splitWord[j] == vowels[i]) {
    if(splitWord[0] == vowels[i]) {
      return newWord + "yay"
      //return newWord.substr(j).concat(newWord.slice(0, j), "ay");  
    } else if (splitWord[j] == vowels[i]) {
      //return newWord + "yay";
      console.log(j);
      return newWord.substr(j).concat(newWord.slice(0, j), "ay");  
    }
    //console.log(newWord)
  } 
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
