const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let content="nothing here"
  document.querySelector(".btn-primary").addEventListener("click",getnewperson);
});

function getnewperson(){
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  // .then(json => {content=json;console.log(json);})
  // .then(console.log(content))
  .then(json=>waiting(json))
}

function waiting(something){
  console.log("insude waiting");
  console.log(something);
  person = something["results"][0]
  gender = something["results"][0]["gender"]
  console.log("gender is "+ gender);
  name = person.name.first + " "+person.name.last
  email = person.email
  street = person.location.street
  city = person.location.city
  state = person.location.state
  postcode = person.location.postcode
  phone = person.phone
  cell = person.cell
  dateOfBirth= person.dob
  console.log(name);
  document.querySelector("#fullname").innerHTML=name
  document.querySelector("#email").innerHTML=email
  document.querySelector("#street").innerHTML=street
  document.querySelector("#city").innerHTML=city
  document.querySelector("#state").innerHTML=state
  document.querySelector("#postcode").innerHTML=postcode
  document.querySelector("#phone").innerHTML=phone
  document.querySelector("#cell").innerHTML=cell
  document.querySelector("#date_of_birth").innerHTML=dateOfBirth




}//something
