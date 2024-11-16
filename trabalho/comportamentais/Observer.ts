interface Observer {
    update(state: string): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(state: string): void {
        this.observers.forEach(observer => observer.update(state));
    }
}

class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(state: string): void {
        console.log(`${this.name} recebeu o estado atualizado: ${state}`);
    }
}

const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Novo Estado!");
