let skills: (string | boolean | number)[] = ["Bash", 'Counter', 'Healing', true, 123];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown: string
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: ""
}

strider.hometown = 'Rivendell';

console.table(strider);

export {
    skills,
    strider
};