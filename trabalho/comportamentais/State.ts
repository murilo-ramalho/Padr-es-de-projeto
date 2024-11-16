interface State {
    handle(): void;
}

class ConcreteStateA implements State {
    handle(): void {
        console.log("Estado A: Comportamento A");
    }
}

class ConcreteStateB implements State {
    handle(): void {
        console.log("Estado B: Comportamento B");
    }
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    request(): void {
        this.state.handle();
    }
}

const context = new Context(new ConcreteStateA());

context.request();

context.setState(new ConcreteStateB());
context.request();
