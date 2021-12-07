const Emp = require('../lib/Employee')

// test('', function() {
    

//     expect().toEqual(expect.any(String))
// })


test('employee object validation', function() {
const emp = new Emp('Collin Whalen', 20, "collin@email.com");

expect(emp.name).toEqual(expect.any(String))
expect(emp.id).toEqual(expect.any(Number))
expect(emp.email).toEqual(expect.any(String))
})



test('emp get name, id, email', function() {
    const emp = new Emp('Collin Whalen', 20, "collin@email.com");

    expect(emp.getName()).toEqual(expect.any(String))
    expect(emp.getId()).toEqual(expect.any(Number))
    expect(emp.getEmail()).toEqual(expect.any(String))
})


















// const add = require('../lib/Employee')

// test('adder', function() {

//     let result = add(2 , 1)
 
//     expect(result).toEqual(3)
// })
