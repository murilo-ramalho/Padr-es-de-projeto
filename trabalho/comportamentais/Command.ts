interface Command {
    execute(): void;
    undo(): void;
}

class Cart {
    private items: string[] = [];

    addItem(item: string): void {
        this.items.push(item);
        console.log(`Added ${item} to cart.`);
    }

    removeItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${item} from cart.`);
        }
    }

    showCart(): void {
        console.log(`Cart items: ${this.items.join(", ")}`);
    }
}

class AddItemCommand implements Command {
    constructor(private cart: Cart, private item: string) {}

    execute(): void {
        this.cart.addItem(this.item);
    }

    undo(): void {
        this.cart.removeItem(this.item);
    }
}

class RemoveItemCommand implements Command {
    constructor(private cart: Cart, private item: string) {}

    execute(): void {
        this.cart.removeItem(this.item);
    }

    undo(): void {
        this.cart.addItem(this.item);
    }
}

class CommandInvoker {
    private history: Command[] = [];

    execute(command: Command): void {
        command.execute();
        this.history.push(command);
    }

    undo(): void {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

const cart = new Cart();
const invoker = new CommandInvoker();

const addItemCommand = new AddItemCommand(cart, "Laptop");
const removeItemCommand = new RemoveItemCommand(cart, "Laptop");

invoker.execute(addItemCommand);
cart.showCart();

invoker.undo();
cart.showCart();
