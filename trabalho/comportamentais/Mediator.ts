interface Mediator {
    notify(sender: Component, event: string): void;
}

class CheckoutMediator implements Mediator {
    constructor(
        private cart: CartComponent,
        private payment: PaymentComponent,
        private inventory: InventoryComponent
    ) {}

    notify(sender: Component, event: string): void {
        if (event === "checkout") {
            console.log("Processing checkout...");
            this.inventory.updateStock();
            this.payment.processPayment();
            this.cart.clearCart();
        }
    }
}

abstract class Component {
    protected mediator?: Mediator;

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class CartComponent extends Component {
    clearCart(): void {
        console.log("Cart cleared.");
        this.mediator?.notify(this, "cartCleared");
    }
}

class PaymentComponent extends Component {
    processPayment(): void {
        console.log("Payment processed.");
        this.mediator?.notify(this, "paymentProcessed");
    }
}

class InventoryComponent extends Component {
    updateStock(): void {
        console.log("Stock updated.");
        this.mediator?.notify(this, "stockUpdated");
    }
}

const cart = new CartComponent();
const payment = new PaymentComponent();
const inventory = new InventoryComponent();

const mediator = new CheckoutMediator(cart, payment, inventory);

cart.setMediator(mediator);
payment.setMediator(mediator);
inventory.setMediator(mediator);

cart.clearCart();
mediator.notify(cart, "checkout");
