import {
    Bowman,
    Swordsman,
    Magician,
    Undead,
    Zombie,
    Daemon
} from '../heroClasses'

test.each([
    [Bowman, 25, 25],
    [Swordsman, 40, 10],
    [Magician, 10, 40],
    [Undead, 25, 25],
    [Zombie, 40, 10],
    [Daemon, 10, 40]
])('should return a character with certain type and stats', (heroType, attack, defence) => {
    const typeHero = new heroType('GoodName');
    expect(typeHero).toEqual(expect.objectContaining({
        type: heroType.name,
        attack: attack,
        defence: defence,
    }))
})