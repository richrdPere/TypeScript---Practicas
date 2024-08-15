// FUNCIONES Y ARROW FUNCTIONS

function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firsNumber:number, secondNumber?:number, base:number = 2) {
  return firsNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });

// FUNCIONES CON OBJETOS COMO PARAMETRO

interface Character {
    name: string,
    hp: number,
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Punto de vida ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 30);

strider.showHp();



export { addNumbers, addNumbersArrow, multiply, healCharacter };
