const Eng = require('../lib/Engineer')

test('engineer object validation', function() {
    const eng = new Eng('Collin Whalen', 20, "collin@email.com", 'Collin-W');
   // expect(eng.name && eng.getName()).toEqual(expect.any(String))
    expect(eng.name).toEqual(expect.any(String))
    expect(eng.id).toEqual(expect.any(Number))
    expect(eng.email).toEqual(expect.any(String))
    expect(eng.username).toEqual(expect.any(String))
    // expect(eng.github).toEqual(expect.any(String))
})
    
    
    
    test('eng get name, id, email, github', function() {
        const eng = new Eng('Collin Whalen', 20, "collin@email.com", 'Collin-W');
    
        expect(eng.getName()).toEqual(expect.any(String))
        expect(eng.getId()).toEqual(expect.any(Number))
        expect(eng.getEmail()).toEqual(expect.any(String))
        // expect(eng.getUsername()).toEqual(expect.any(String))
        expect(eng.getGithub()).toEqual(expect.any(String))
    })
    