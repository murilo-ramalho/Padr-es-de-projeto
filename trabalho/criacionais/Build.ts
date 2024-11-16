class House {
    private parts: string[] = [];

    addPart(part: string) {
        this.parts.push(part);
    }

    show() {
        console.log("Casa construída com: ", this.parts.join(", "));
    }
}

interface HouseBuilder {
    reset(): void;
    buildWalls(): void;
    buildRoof(): void;
    buildDoors(): void;
    getResult(): House;
}

class ConcreteHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.reset();
    }

    reset() {
        this.house = new House();
    }

    buildWalls() {
        this.house.addPart("Paredes");
    }

    buildRoof() {
        this.house.addPart("Telhado");
    }

    buildDoors() {
        this.house.addPart("Portas");
    }

    getResult(): House {
        const result = this.house;
        this.reset();
        return result;
    }
}

class Director {
    constructor(private builder: HouseBuilder) {}

    constructSimpleHouse() {
        this.builder.buildWalls();
        this.builder.buildRoof();
    }

    constructFullHouse() {
        this.builder.buildWalls();
        this.builder.buildRoof();
        this.builder.buildDoors();
    }
}

const builder = new ConcreteHouseBuilder();
const director = new Director(builder);

console.log("Construindo casa simples:");
director.constructSimpleHouse();
builder.getResult().show();

console.log("Construindo casa completa:");
director.constructFullHouse();
builder.getResult().show();
