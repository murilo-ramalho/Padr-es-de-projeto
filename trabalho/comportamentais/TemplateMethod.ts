abstract class OrderProcessTemplate {
    processOrder(): void {
        this.addItemToCart();
        this.checkout();
        this.processPayment();
        this.deliverOrder();
    }

    abstract addItemToCart(): void;
    abstract checkout(): void;
    abstract processPayment(): void;
    deliverOrder(): void {
        console.log("Order delivered to the customer.");
    }
}

class OnlineOrder extends OrderProcessTemplate {
    addItemToCart(): void {
        console.log("Added items to online shopping cart.");
    }

    checkout(): void {
        console.log("Checked out online order.");
    }

    processPayment(): void {
        console.log("Processed online payment.");
    }
}

class StorePickupOrder extends OrderProcessTemplate {
    addItemToCart(): void {
        console.log("Added items to in-store pickup cart.");
    }

    checkout(): void {
        console.log("Checked out store pickup order.");
    }

    processPayment(): void {
        console.log("Processed in-store payment.");
    }
}

const onlineOrder = new OnlineOrder();
console.log("Processing Online Order:");
onlineOrder.processOrder();

console.log("\nProcessing Store Pickup Order:");
const storePickupOrder = new StorePickupOrder();
storePickupOrder.processOrder();
