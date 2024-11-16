class Memento {
    constructor(private state: string) {}

    getState(): string {
        return this.state;
    }
}

class Document {
    private state: string = "";

    setState(state: string): void {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }

    save(): Memento {
        return new Memento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

class History {
    private mementos: Memento[] = [];

    addMemento(memento: Memento): void {
        this.mementos.push(memento);
    }

    getMemento(): Memento | undefined {
        return this.mementos.pop();
    }
}

const document = new Document();
const history = new History();

document.setState("Version 1");
history.addMemento(document.save());

document.setState("Version 2");
history.addMemento(document.save());

document.setState("Version 3");
console.log("Current state:", document.getState());

const lastMemento = history.getMemento();
document.restore(lastMemento!);
console.log("Restored to:", document.getState());
