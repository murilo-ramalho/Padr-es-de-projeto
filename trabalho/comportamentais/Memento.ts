class CartMemento {
    constructor(private items: string[]) {}

    getItems(): string[] {
        return [...this.items];
    }
}

class Cart {
    private items: string[] = [];

    addItem(item: string): void {
        this.items.push(item);
        console.log(`Added: ${item}`);
    }

    removeItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Removed: ${item}`);
        }
    }

    save(): CartMemento {
        return new CartMemento(this.items);
    }

    restore(memento: CartMemento): void {
        this.items = memento.getItems();
        console.log("Cart restored.");
    }

    showItems(): void {
        console.log(`Current Cart: ${this.items.join(", ")}`);
    }
}

class CartHistory {
    private history: CartMemento[] = [];

    addSnapshot(memento: CartMemento): void {
        this.history.push(memento);
    }

    getSnapshot(index: number): CartMemento | undefined {
        return this.history[index];
    }
}

const cart = new Cart();
const history = new CartHistory();

cart.addItem("Laptop");
cart.addItem("Smartphone");
history.addSnapshot(cart.save());

cart.addItem("Tablet");
cart.removeItem("Smartphone");
history.addSnapshot(cart.save());

cart.showItems();

cart.restore(history.getSnapshot(0)!);
cart.showItems();
