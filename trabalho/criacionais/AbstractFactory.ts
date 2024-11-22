interface ProductFactory {
    createProduct(): Product;
    createShipping(): Shipping;
}

interface Product {
    getDetails(): string;
}

interface Shipping {
    calculateCost(): number;
}

class ElectronicsFactory implements ProductFactory {
    createProduct(): Product {
        return new Electronic();
    }

    createShipping(): Shipping {
        return new ElectronicsShipping();
    }
}

class FurnitureFactory implements ProductFactory {
    createProduct(): Product {
        return new Furniture();
    }

    createShipping(): Shipping {
        return new FurnitureShipping();
    }
}

class Electronic implements Product {
    getDetails(): string {
        return "Electronic: Smartphone";
    }
}

class Furniture implements Product {
    getDetails(): string {
        return "Furniture: Sofa";
    }
}

class ElectronicsShipping implements Shipping {
    calculateCost(): number {
        return 15;
    }
}

class FurnitureShipping implements Shipping {
    calculateCost(): number {
        return 50;
    }
}

function createOrder(factory: ProductFactory): void {
    const product = factory.createProduct();
    const shipping = factory.createShipping();

    console.log(product.getDetails());
    console.log(`Shipping cost: $${shipping.calculateCost()}`);
}

createOrder(new ElectronicsFactory());
createOrder(new FurnitureFactory());
