const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let pic = document.getElementById("profile_picture")
  let name = document.getElementById("fullname")
  let button = document.getElementsClassName("btn btn-primary")[0]

  button.addEventListener('click', populatePage)

  function populatePage(){
    fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(renderPage)

    function renderPage(){
      data = data.results[0]
      name.innerText = ((data.name.title + ". " + data.name.first + " " + data.name.last))
    }
  }
  
});
