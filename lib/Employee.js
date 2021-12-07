// //tester 
// function add(a, b) {   
//     return a + b;
// }

// export default add



class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName()  {return this.name}
    getEmail() {return this.email}
    getId()    {return this.id}
    getRole()  {return 'Emp'}
 
}

module.exports = Employee