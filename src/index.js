const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

let pic = document.getElementById("profile_picture")
let name = document.getElementById("fullname")
let email = document.getElementById("email")
let street = document.getElementById("street")
let city = document.getElementById("city")
let state = document.getElementById("state")
let postcode = document.getElementById("postcode")
let phone = document.getElementById("phone")
let cell = document.getElementById("cell")
let dob = document.getElementById("date_of_birth")

let button = document.getElementsByClassName("btn btn-primary")[0]
button.addEventListener("click", populatePage)

function populatePage(){
  fetch("https://randomuser.me/api/")
  .then(function(res) {return res.json()})
  .then(renderPage)

  function renderPage(data){
    data = data.results[0]
    name.innerText = ((data.name.title + ". " + data.name.first + " " + data.name.last))
    email.innerText = data.email
    street.innerText = data.location.street
    city.innerText = data.location.city
    state.innerText = data.location.state
    postcode.innerText = data.location.postcode
    phone.innerText = data.phone
    cell.innerText = data.cell
    dob.innerText = data.dob
    pic.src = data.picture.large
  }
}
});
