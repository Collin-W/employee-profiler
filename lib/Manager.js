class Manager {
    constructor(name, id, email, officeNum){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum
    }
    getName()  {return this.name}
    getEmail() {return this.email}
    getId()    {return this.id}
    getOfficeNum() {return this.officeNum}
    getRole()  {return 'Mana'}

}

module.exports = Manager;