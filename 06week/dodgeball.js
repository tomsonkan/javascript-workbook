'use strict';

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


const listOfPlayers = []
const blueTeam = []
const redTeam = []

class people {
  constructor(id, name, age, skillSet, placeBorn){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}

class dodgeBallPlayer extends people {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
  this.canThrowBall = canThrowBall;
  this.canDodgeBall = canDodgeBall;
  this.hasPaid = hasPaid;
  this.isHealthy = isHealthy;
  this.yearsExperience = yearsExperience
}
}
class blueTeammate extends dodgeBallPlayer{
  constructor(color, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = "blue jay"
  }
}
class redTeammate extends dodgeBallPlayer{
  constructor(color, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = "cardinal";
  }
}

const listPeopleChoices = () => {
  console.log("hello")
  const listElement = document.getElementById('people')
  document.getElementById('people').innerHTML = ''
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
};

//splice's from arrOfPeople array and pushes it to the listOfPlayers array
const makePlayer = ( id ) => {
  const listElement = document.getElementById('players')
  listElement.innerHTML = ''
  console.log(`new player: ${listOfPlayers}`)
  let x = arrOfPeople.findIndex(x => x.id === id)
  listOfPlayers.push(arrOfPeople[x])
  arrOfPeople.splice(x, 1)
    console.log(listOfPlayers, arrOfPeople)

//mapping of how to display on the listOfPlayers arrary. Each person will contain buttons for red team, blue team, and RemovePlayer
    listOfPlayers.map(person => { 
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "red Team"
      button.addEventListener('click', function() {red_Team(person.id)} )
      li.appendChild(button)  
      const button1 = document.createElement("button")
      button1.innerHTML = "blue Team"
      button1.addEventListener('click', function() {blue_Team(person.id)} )
      li.appendChild(button1)
      listElement.append(li)
      const button2 = document.createElement("button")
      button2.innerHTML = "Remove"
      button2.addEventListener('click', function() {RemovePlayer(person.id)} )
      li.appendChild(button2)
      listElement.append(li)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
      
      listElement.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.nodeName === 'BUTTON') {
          e.target.parentNode.remove()
        }
      })

  })
}

//function to RemovePlayer from the arrOfPeople and put back to the listOfPlayers
  const RemovePlayer = (id) => {
    console.log('removing', listOfPlayers, 'red', redTeam)
  
    let x = listOfPlayers.findIndex(x => x.id === id)
    arrOfPeople.push(listOfPlayers[x])
    listOfPlayers.splice(x, 1)
    const listElement = document.getElementById('players')
    document.getElementById('players').innerHTML = ''
  
//mapping of how to display on the listOfPlayers arrary. Each person will contain buttons for red team, blue team, and RemovePlayer
    listOfPlayers.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "red Team"
      button.addEventListener('click', function() {red_Team(person.id)} )
      li.appendChild(button)  
      const button1 = document.createElement("button")
      button1.innerHTML = "blue Team"
      button1.addEventListener('click', function() {blue_Team(person.id)} )
      li.appendChild(button1)
      listElement.append(li)
      const button2 = document.createElement("button")
      button2.innerHTML = "Remove"
      button2.addEventListener('click', function(e) {RemovePlayer(person.id)} )
      li.appendChild(button2)
      listElement.append(li)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)

    })
  
  }

const red_Team = (id) => {
  // let redTeamPlayers = document.getElementById('red');
  // redTeamPlayers.innerHTML = ''
    let x = listOfPlayers.findIndex(x => x.id === id)
    console.log('as', listOfPlayers, redTeam)
    redTeam.push(listOfPlayers[x])
    var redplayer = listOfPlayers.splice(x, 1);
    const listElement = document.getElementById('red')
    console.log(listOfPlayers, arrOfPeople)
    redplayer.map(person => {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
      const button = document.createElement("button")
      button.innerHTML = "Remove"
      button.addEventListener('click', function(e) {RemoveRed(person.id, e)} )
      // li.appendChild(button) 
      li.appendChild(button)
      listElement.append(li)
      // makePlayer()
    })
}

const blue_Team = (id) => {
  let x = listOfPlayers.findIndex(x => x.id === id)
  blueTeam.push(listOfPlayers[x])
  var blueplayer = listOfPlayers.splice(x, 1)
  const listElement = document.getElementById('blue')
  console.log(listOfPlayers, blueplayer, 'reeeddrg')
  blueplayer.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    button.addEventListener('click', function(e) {RemoveBlue(person.id, e)} )
    // li.appendChild(button) 
    li.appendChild(button)
    listElement.append(li)  
    // makePlayer()
})
}




const RemoveRed = (id) => {
  console.log('removing', listOfPlayers, 'red', redTeam)

  let x = redTeam.findIndex(x => x.id === id)
  listOfPlayers.push(redTeam[x])
  redTeam.splice(x, 1)
  console.log('red team:', redTeam)
  const listElement = document.getElementById('red')
  document.getElementById('red').innerHTML = ''
  redTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    button.addEventListener('click', function() {RemoveRed(person.id)} )
    li.appendChild(button)
    listElement.append(li)
    
  })

}

const RemoveBlue = (id) => {
  console.log('removing', listOfPlayers, 'red', blueTeam)

  let x = blueTeam.findIndex(x => x.id === id)
  listOfPlayers.push(blueTeam[x])
  blueTeam.splice(x, 1)
  console.log('red team:', blueTeam)
  const listElement = document.getElementById('blue')
  document.getElementById('blue').innerHTML = ''
  blueTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))  
    const button = document.createElement("button")
    button.innerHTML = "Remove"
    button.addEventListener('click', function() {RemoveBlue(person.id)} )
    // li.appendChild(button) 
    li.appendChild(button)
    listElement.append(li)  
})

}

  //new object with player names
// const newPlayer = new dodgeBallPlayer (`${arrOfPeople[id - 1].name}, ${arrOfPeople[id - 1].skillSet}, ${arrOfPeople[id - 1].id}`);

// console.log(`new player: ${newPlayer.canThrowBall}, ${newPlayer.canDodgeBall}, ${newPlayer.hasPaid}, ${newPlayer.isHealthy}, ${newPlayer.yearsExperience}`);

// listOfPlayers.push(newPlayer)
