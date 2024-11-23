interface Visitor {
    visitProduct(product: Product): void;
    visitDiscount(discount: Discount): void;
}

interface Visitable {
    accept(visitor: Visitor): void;
}

class Product implements Visitable {
    constructor(public name: string, public price: number) {}

    accept(visitor: Visitor): void {
        visitor.visitProduct(this);
    }
}

class Discount implements Visitable {
    constructor(public code: string, public percentage: number) {}

    accept(visitor: Visitor): void {
        visitor.visitDiscount(this);
    }
}

class CartSummaryVisitor implements Visitor {
    private total = 0;

    visitProduct(product: Product): void {
        console.log(`Product: ${product.name}, Price: $${product.price}`);
        this.total += product.price;
    }

    visitDiscount(discount: Discount): void {
        console.log(`Applying Discount: ${discount.percentage}% off with code ${discount.code}`);
        this.total *= (1 - discount.percentage / 100);
    }

    getTotal(): number {
        return this.total;
    }
}

const items: Visitable[] = [
    new Product("Laptop", 1000),
    new Product("Mouse", 50),
    new Discount("SALE20", 20),
];

const visitor = new CartSummaryVisitor();

items.forEach(item => item.accept(visitor));

console.log(`Total Price: $${visitor.getTotal().toFixed(2)}`);
