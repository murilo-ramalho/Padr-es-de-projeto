interface Strategy {
    execute(a: number, b: number): number;
}

class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Calculator {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

const calculator = new Calculator(new AddStrategy());
console.log(calculator.executeStrategy(5, 3));

calculator.setStrategy(new MultiplyStrategy());
console.log(calculator.executeStrategy(5, 3));
