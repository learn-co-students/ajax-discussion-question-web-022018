const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  function getPerson(e){
    e.preventDefault()
    fetch("https://randomuser.me/api/").then(resp => resp.json()).then(json=> renderPerson(json.results[0]))
  }

  function renderPerson(json){
    makeName(json)
    return json
  }

  function makeName(json){
    let nameSlot = document.getElementById('fullname')
    nameSlot.innerText = json.name.first + " "+ json.name.last
  }

  let newPersonButton = document.getElementsByTagName("button")[0]
  newPersonButton.addEventListener("click", getPerson)
});
