// El nombre de la clase debe ir en mayusculas
class Pokemon {
    name = "";
    type = "";
    evolutions = []

    constructor(name, type, evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }
    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        // Valida que la evolucion exista
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if(EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}

const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizard"]);

const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve());
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve());
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));