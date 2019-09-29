let arrayOfPosts;

// // this function waits for the web page to be loaded, when it does it will run the code 
// //inside of it which happen to be getPosts()
// window.onload = function() {
//   getPosts()

// }

// this function is going to make a fetch request to the url inside it's parameter
// brackets (). Then it will turn the response (data it's getting back), saved here 
//as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
function getPosts() {
  fetch('https://randomuser.me/api/?results=30') 
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


function getPosts2() {
  fetch('https://randomuser.me/api/?results=30') 
      .then(function(response) {
        return response.json()
        console.log(response)
    })
      .then(function(data) {
      let output =
        `<h2>Addl</h2>`
        data.results.forEach((function(user){
          output += `
        <img src = "${user.picture.large}" alt = "pic">
          <ul>
          <li>${user.name.first} ${user.name.last}</li>
          <li>${user.location.street}, ${user.dob.date}</li>
          <li>${user.gender}</li>
          </ul>
        `
      }))
      // output += "</tbody></table>";
      document.getElementById("demo2").innerHTML = output;
    })
}

// // this function logs the results in your browsers console
// const consolePosts = () => {
//   console.log(arrayOfPosts)
// }

// // this function creates elements inside the all-posts ul, then appends text 
// //inside it with the posts that were returned in the request.
// const displayPost = () => {
//   const allPosts = document.getElementById('all-posts')
//   arrayOfPosts.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//     li.appendChild(text)
//     allPosts.append(li)
//   })
// }

// Your job now is to follow the functions above and use them 
//as templates to build the functionality the buttons in the 
//index.html file already have laid out in it. This way you 
//can learn how to build fetch requests and work with other apis 
//and become a real developer!!

// function getJson() {

//   fetch('color.json')
//     .then((dinh) => dinh.json())
//     .then((data) => {
//       console.log(data)
//     }
    
//     )
// }