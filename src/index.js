const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let button = document.getElementsByClassName('btn btn-primary')[0]
  button.addEventListener('click', populate)

  function populate() {
    fetch("https://randomuser.me/api/").then(res => res.json()).then(render)

    function render(data) {
      data = data.results[0]
      document.getElementById('profile_picture').src = data.picture.large
      document.getElementById('fullname').innerText = (data.name.title + ' ' + data.name.first + ' ' + data.name.last)
      document.getElementById('street').innerText = data.location.street
      document.getElementById('city').innerText = data.location.city
      document.getElementById('state').innerText = data.location.state
      document.getElementById('postcode').innerText = data.location.postcode
      document.getElementById('phone').innerText = data.phone
      document.getElementById('cell').innerText = data.cell
      document.getElementById('email').innerText = data.email
      document.getElementById('date_of_birth').innerText = data.dob
    }
  }
});
