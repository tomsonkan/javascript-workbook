// GamepadButton.addEventListener('click', function grabVal() )



function getBrew() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `https://sandbox-api.brewerydb.com/v2/beers/?key=5b3a1f0733ab1b492875ba0998e99a2a/?data=30`
  fetch(proxy + api) 
      .then(function(response) {
        return response.json()
        console.log(response)
    })
      .then(function(result) {
      let output =
        `<h2>Breweries</h2>`
        result.data.forEach((function(brew){
          output += `
          <ul>
          <li>${brew.name} ${brew.id}</li>
          <li>${brew.nameDisplay}, ${brew.styleId}</li>
          <li>${brew.labels.icon}</li>
          </ul>
        `
      }))
      document.getElementById("demo").innerHTML = output;
    })
}

// // This is to add the click feature on my button
// const button = document.querySelector('button');
// const subInput = document.querySelector('input');
// const result = document.querySelector('#result');

// function renderList(json) {
//   const posts = json.data.children;
//   return `<ol>
//     ${posts.data(
//       post => `<li>${post.data.title} <a href=${post.data.url} target='_blank'>Link</a></li>`
//     ).join('')}
//   </ol>`;
// }

// async function fetchTopFive(sub) {
//   const URL = `https://sandbox-api.brewerydb.com/v2/beers/?key=5b3a1f0733ab1b492875ba0998e99a2a`;
//   try {
//     const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
//     const response = await fetchResult;
//     if (response.ok) {
//       const jsonData = await response.json();
//       result.innerHTML = renderList(jsonData);
//     } else {
//       result.innerHTML = `Response.status: ${response.status}`;
//     }
//   } catch (e) {
//     result.innerHTML = e;
//   }
// }

// button.addEventListener('click', () => {
//   fetchTopFive(subInput.value);
// });
