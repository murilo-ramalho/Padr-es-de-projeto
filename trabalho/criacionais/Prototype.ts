interface ProductPrototype {
    clone(): ProductPrototype;
    getDetails(): string;
}

class Product implements ProductPrototype {
    constructor(private name: string, private price: number) {}

    clone(): ProductPrototype {
        return new Product(this.name, this.price);
    }

    getDetails(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

const baseProduct = new Product("Basic T-Shirt", 20);
const clonedProduct = baseProduct.clone();

console.log(baseProduct.getDetails());
console.log(clonedProduct.getDetails());
