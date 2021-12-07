const Mana = require('../lib/Manager')

test('manager object validation and manager get name, id, email, office number', function() {
    const mana = new Mana('Collin Whalen', 20, "collin@email.com", 5);

    expect(mana.name && mana.getName()).toEqual(expect.any(String))
    expect(mana.id && mana.getId()).toEqual(expect.any(Number))
    expect(mana.email && mana.getEmail()).toEqual(expect.any(String))
    expect(mana.officeNum && mana.getOfficeNum()).toEqual(expect.any(Number))
})
    