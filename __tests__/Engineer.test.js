const Eng = require('../lib/Engineer')

test('engineer object validation and eng get name, id, email, github', function() {
    const eng = new Eng('Collin Whalen', 20, "collin@email.com", 'Collin-W');

    expect(eng.name && eng.getName()).toEqual(expect.any(String))
    expect(eng.id && eng.getId()).toEqual(expect.any(Number))
    expect(eng.email && eng.getEmail()).toEqual(expect.any(String))
    expect(eng.username && eng.getGithub()).toEqual(expect.any(String))
})
    
  