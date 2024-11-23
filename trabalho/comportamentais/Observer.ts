interface Observer {
    update(event: string, data: any): void;
}

class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event: string, data: any): void {
        this.observers.forEach(observer => observer.update(event, data));
    }
}

class Product extends Subject {
    constructor(private name: string, private stock: number) {
        super();
    }

    setStock(stock: number): void {
        this.stock = stock;
        this.notify("stockChange", { product: this.name, stock: this.stock });
    }

    getStock(): number {
        return this.stock;
    }
}

class Customer implements Observer {
    constructor(private name: string) {}

    update(event: string, data: any): void {
        if (event === "stockChange") {
            console.log(
                `${this.name} notified: Stock for ${data.product} is now ${data.stock}.`
            );
        }
    }
}

class Admin implements Observer {
    update(event: string, data: any): void {
        if (event === "stockChange") {
            console.log(
                `Admin notified: ${data.product} stock updated to ${data.stock}.`
            );
        }
    }
}

const product = new Product("Laptop", 10);

const customer1 = new Customer("Alice");
const customer2 = new Customer("Bob");
const admin = new Admin();

product.addObserver(customer1);
product.addObserver(customer2);
product.addObserver(admin);

product.setStock(5);
product.setStock(0);
