// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()

// github username

// gitGithub()

// getRole()  Overridden to return

class Engineer {
    constructor(name, id, email, username){
        this.name = name;
        this.id = id;
        this.email = email;
        this.username = username
    }
    getName()  {return this.name}
    getEmail() {return this.email}
    getId()    {return this.id}
    getGithub() {return this.username}
    getRole()  {return 'Eng'}

}

module.exports = Engineer;