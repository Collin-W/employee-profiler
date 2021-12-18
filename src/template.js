// creates a specific team member's html and the data accociated
let employee = function(emp) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ emp.name } </h5>
  <p class="card-text"> ${ emp.getRole() } </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${ emp.id }</li>
  <li class="list-group-item">${ emp.email }</li>
</ul>
</div>
`}

let engineer = function(eng) { 

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ eng.name } </h5>
  <p class="card-text"> ${ eng.getRole() } </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${ eng.id }</li>
  <li class="list-group-item">${ eng.email }</li>
  <li class="list-group-item"> ${ eng.username } </li>
</ul>

<div class="card-body">
  <a href="#" class="card-link">Card link</a>
</div>
</div>
`}

let intern = function(int) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ int.name } </h5>
  <p class="card-text"> ${ int.getRole() } </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${ int.id }</li>
  <li class="list-group-item">${ int.email }</li>
  <li class="list-group-item"> ${ int.school } </li>
</ul>
</div>
`}

let manager = function(mana) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ mana.name } </h5>
  <p class="card-text"> ${ mana.getRole() } </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${ mana.id }</li>
  <li class="list-group-item">${ mana.email }</li>
  <li class="list-group-item"> ${ mana.officeNum } </li>
</ul>
</div>
`}

let homePage = function(teamArray) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <header>The Team</header>

    <section>
      ${teamArray.map(member => { 
        if (member.getRole() === "Mana") {
         return manager(member)
        }
      }
      )  .join('')}
    </section>
    
</body>
</html>
`
}




module.exports = homePage;

