import Character from './basicClass.js';

export class Bowman extends Character {
    constructor(name) {
        const type = 'Bowman';
        const attack = 25;
        const defence = 25;
        super(name, type, attack, defence);
    }
}

export class Swordsman extends Character {
    constructor(name) {
        const type = 'Swordsman';
        const attack = 40;
        const defence = 10;
        super(name, type, attack, defence);
    }
}

export class Magician extends Character {
    constructor(name) {
        const type = 'Magician';
        const attack = 10;
        const defence = 40;
        super(name, type, attack, defence);
    }
}

export class Undead extends Character {
    constructor(name) {
        const type = 'Undead';
        const attack = 25;
        const defence = 25;
        super(name, type, attack, defence);
    }
}

export class Zombie extends Character {
    constructor(name) {
        const type = 'Zombie';
        const attack = 40;
        const defence = 10;
        super(name, type, attack, defence);
    }
}

export class Daemon extends Character {
    constructor(name) {
        const type = 'Daemon';
        const attack = 10;
        const defence = 40;
        super(name, type, attack, defence);
    }
}
