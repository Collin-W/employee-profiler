// creates a specific team member's html and the data accociated


let engineer = function (eng) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ eng.name } </h5>
  <p class="card-text"> ${ eng.getRole() }ineer </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${ eng.id }</li>
  <li class="list-group-item"> <a href="mailto:">Email: ${ eng.email }</a></li>
  <li class="list-group-item" target="_blank">GitHub: ${ eng.username } </li>
</ul>

<div class="card-body">
  <a href="#" class="card-link">Card link</a>
</div>
</div>
`
}

let intern = function (int) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ int.name } </h5>
  <p class="card-text"> ${ int.getRole() }ern </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${ int.id }</li>
  <li class="list-group-item"> <a href="mailto:">Email: ${ int.email }</a></li>
  <li class="list-group-item">School: ${ int.school } </li>
</ul>
</div>
`
}

let manager = function (mana) {

  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ mana.name } </h5>
  <p class="card-text"> ${ mana.getRole() }ger </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Id: ${ mana.id }</li>
  <li class="list-group-item"> <a href="mailto:">Email: ${ mana.email }</a></li>
  <li class="list-group-item">Office Number: ${ mana.officeNum } </li>
</ul>
</div>
`
}

let homePage = function (teamArray) {
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

        } else if (member.getRole() === 'Eng') {
          return engineer(member)

        }  else {
          return intern(member)
        }
      }) 
      .join('')}
    </section>
</body>
</html>
`
}




module.exports = homePage;