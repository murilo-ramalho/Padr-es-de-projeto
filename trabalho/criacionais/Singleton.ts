// Singleton Class
class Cart {
    private static instance: Cart;
    private items: string[] = [];

    private constructor() {}

    static getInstance(): Cart {
        if (!Cart.instance) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    }

    addItem(item: string): void {
        this.items.push(item);
    }

    getItems(): string[] {
        return this.items;
    }
}

const cart1 = Cart.getInstance();
cart1.addItem("Product A");

const cart2 = Cart.getInstance();
cart2.addItem("Product B");

console.log(cart1.getItems());
console.log(cart2.getItems());
console.log(cart1 === cart2);
