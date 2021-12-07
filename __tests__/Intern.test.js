const Int = require('../lib/Intern')

test('intern object validation and int get name, id, email, school', function() {
    const int = new Int('Collin Whalen', 20, "collin@email.com", 'cool school');

    expect(int.name && int.getName()).toEqual(expect.any(String))
    expect(int.id && int.getId()).toEqual(expect.any(Number))
    expect(int.email && int.getEmail()).toEqual(expect.any(String))
    expect(int.school && int.getSchool()).toEqual(expect.any(String))
})
    