var getSearchText;

function keyup(searchText) {
  //setting your input text to the global Javascript Variable for every key press
  console.log(searchText)
  return getSearchText = searchText;

  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  // if (e.keyCode == 13) {
  //   window.location = "http://www.myurl.com/search/" + inputTextValue;
  // }
}


function getBrew() {
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  // const enterTxt =  
  const api = `http://api.punkapi.com/v2/beers?beer_name=${getSearchText}`
  fetch(api) 
      .then(function(response) {
        return response.json()
        console.log(response)
    })
      .then(function(result) {
        console.log('result', result)
      let output =
      `<h2> </h2>`
        result.forEach((function(brew){
          output += `
          <ul>
          <li>${brew.name} id: ${brew.id}</li>
          <li>${brew.description}, ${brew.ebc}</li>
          <li>Boil Volume: ${brew.boil_volume.value}</li>
          </ul>
        `
      }))
      document.getElementById("demo").innerHTML = output;
    })
}
