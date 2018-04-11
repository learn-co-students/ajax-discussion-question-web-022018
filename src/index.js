const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function renderInfo(data) {
  $('#profile_picture').attr('src', data.picture.large);
  document.getElementById('fullname').innerText = `${data.name.first} ${data.name.last}`
  document.getElementById('email').innerText = data.email
  document.getElementById('street').innerText = data.location.street
  document.getElementById('city').innerText = data.location.city
  document.getElementById('state').innerText = data.location.state
  document.getElementById('postcode').innerText = data.location.postcode
  document.getElementById('phone').innerText = data.phone
  document.getElementById('cell').innerText = data.cell
  document.getElementById('date_of_birth').innerText = data.dob
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.getElementById('the-button').addEventListener('click', event => {
    fetch("https://randomuser.me/api/").then(res => res.json()).then(json => {console.log(json.results[0]), renderInfo(json.results[0])})
  })
});
