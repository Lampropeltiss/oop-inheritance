import Character from '../basicClass';

test.each([
    ['MyHero', 'Bowman', 10, 10],
    ['SecondHero', 'Magician', 20, 0, 20],
    ['ThirdHero', 'Zombie', 20, 0, 2, 250],
])('should return object with properties of certain types', (...args) => {
    const basicHero = new Character(...args);
    expect(basicHero).toEqual(expect.objectContaining({
        name: expect.any(String),
        type: expect.any(String),
        attack: expect.any(Number),
        defence: expect.any(Number),
        level: expect.any(Number),
        health: expect.any(Number),
    }))
})

test.each([
    'qw',
    'AnotherHero',
    23456
])('should throw error for bad NAME', (name) => {
    function createBadNamedHero() { new Character(name, 'unclassed', 10, 10) }
    expect(createBadNamedHero).toThrow();
})

test.each([
    'zombie',
    'human',
    'notype',
    '',
    15
])('should throw error for bad TYPE', (type) => {
    function createBadTypeHero() { new Character('Goodname', type, 10, 10) }
    expect(createBadTypeHero).toThrow();
})
