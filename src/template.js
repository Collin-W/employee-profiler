let employee = 

`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"> ${ emp.name } </h5>
  <p class="card-text"> ${ getRole() } </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${ emp.id }</li>
  <li class="list-group-item">${ emp.email }</li>
</ul>
</div>
`

let engineer = 

`
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
`

let intern = 

`
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
`

let manager = 

`
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
`

let homePage = function(teamCards) {
  return`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <header>The Team</header>

    <section>
      ${teamCards}
    </section>
    
</body>
</html>
`
}

