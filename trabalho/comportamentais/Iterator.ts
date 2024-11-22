interface IterableCollection<T> {
    createIterator(): Iterator<T>;
}

class ProductCollection implements IterableCollection<string> {
    private products: string[] = [];

    addProduct(product: string): void {
        this.products.push(product);
    }

    createIterator(): Iterator<string> {
        return new ProductIterator(this.products);
    }
}

interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

class ProductIterator implements Iterator<string> {
    private position: number = 0;

    constructor(private products: string[]) {}

    hasNext(): boolean {
        return this.position < this.products.length;
    }

    next(): string {
        return this.products[this.position++];
    }
}

const productCollection = new ProductCollection();
productCollection.addProduct("Laptop");
productCollection.addProduct("Smartphone");
productCollection.addProduct("Tablet");

const iterator = productCollection.createIterator();

while (iterator.hasNext()) {
    console.log(`Product: ${iterator.next()}`);
}
