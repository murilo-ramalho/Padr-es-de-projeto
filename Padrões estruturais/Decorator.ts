abstract class Coffee {
    abstract cost(): number;
    abstract getDescription(): string;
}

class SimpleCoffee extends Coffee {
    cost(): number {
        return 5.00;
    }

    getDescription(): string {
        return "Simple Coffee";
    }
}

abstract class CoffeeDecorator extends Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract getDescription(): string;
}

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1.50;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", Milk";
    }
}

class ChocolateDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 2.00;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", Chocolate";
    }
}

class WhippedCreamDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1.00;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", Whipped Cream";
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Escolha o seu café (1 - Simples, 2 - Leite, 3 - Chocolate, 4 - Chantilly): ', (coffeeChoice: string) => {
    let coffee: Coffee = new SimpleCoffee();

    if (coffeeChoice === '2') {
        coffee = new MilkDecorator(coffee);
    } else if (coffeeChoice === '3') {
        coffee = new ChocolateDecorator(coffee);
    } else if (coffeeChoice === '4') {
        coffee = new WhippedCreamDecorator(coffee);
    }

    console.log(`Pedido: ${coffee.getDescription()}`);
    console.log(`Custo: $${coffee.cost().toFixed(2)}`);

    readline.close();
});

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Decorator em TypeScript, permitindo que
diferentes ingredientes sejam adicionados dinamicamente a um café. A classe base
`Coffee` define o custo e a descrição do café, enquanto os Decorators (como
`MilkDecorator`, `ChocolateDecorator`, e `WhippedCreamDecorator`) estendem essa
funcionalidade, adicionando seus próprios custos e descrições. O usuário escolhe
um tipo de café, e o sistema constrói dinamicamente a bebida final, permitindo a
personalização e extensibilidade sem alterar as classes base.
*/
