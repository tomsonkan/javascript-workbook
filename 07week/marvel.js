function getMarvel() {
  fetch('https://sandbox-api.brewerydb.com/v2/beers/?key=5b3a1f0733ab1b492875ba0998e99a2a') 
      .then(function(response) {
        return response.json()
        console.log(response)

        //.then((dinh) => dinh.json())
    })
      .then(function(result) {
      let output =
        `<h2>Users</h2>`
        result.results.forEach((function(user){
          output += `
          <img src = "${user.picture.large}" alt = "pic">
          <ul>
          <li>${user.name.first} ${user.name.last}</li>
          <li>${user.location.city}, ${user.location.state}</li>
          <li>${user.email}</li>
            </div>
              <button onclick="getPosts2()">Addl Info</button>
                <ul>
                <li>${user.location.street}, ${user.dob.date}</li>
                <li>${user.gender}</li>
                </ul>
            </div>
          </ul>
        `
      }))
      // output += "</tbody></table>";
      document.getElementById("demo").innerHTML = output;
    })
}