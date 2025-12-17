export default class Character {
    constructor(name, type, attack, defence, level = 1, health = 100) {
        if (typeof name != 'string' || name.length < 3 || name.length > 10) {
            throw new Error('bad name');
        }
        
        const heroTypes = [
            'Bowman', 
            'Swordsman', 
            'Magician',
            'Undead', 
            'Zombie', 
            'Daemon', 
        ];
        if (!heroTypes.includes(type)) {
            throw new Error('bad type')
        }

        this.name = name;
        this.type = type;
        this.attack = attack;
        this.defence = defence;
        this.level = level;
        this.health = health;
    }
}
