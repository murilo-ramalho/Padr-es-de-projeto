interface OrderState {
    proceed(): void;
    cancel(): void;
}

class PendingState implements OrderState {
    constructor(private order: Order) {}

    proceed(): void {
        console.log("Order moved to 'Processing' state.");
        this.order.setState(new ProcessingState(this.order));
    }

    cancel(): void {
        console.log("Order canceled from 'Pending' state.");
        this.order.setState(new CanceledState(this.order));
    }
}

class ProcessingState implements OrderState {
    constructor(private order: Order) {}

    proceed(): void {
        console.log("Order moved to 'Shipped' state.");
        this.order.setState(new ShippedState(this.order));
    }

    cancel(): void {
        console.log("Order canceled from 'Processing' state.");
        this.order.setState(new CanceledState(this.order));
    }
}

class ShippedState implements OrderState {
    constructor(private order: Order) {}

    proceed(): void {
        console.log("Order is already shipped. Cannot proceed further.");
    }

    cancel(): void {
        console.log("Cannot cancel an order that has already been shipped.");
    }
}

class CanceledState implements OrderState {
    proceed(): void {
        console.log("Cannot proceed with a canceled order.");
    }

    cancel(): void {
        console.log("Order is already canceled.");
    }
}

class Order {
    private state: OrderState;

    constructor() {
        this.state = new PendingState(this);
    }

    setState(state: OrderState): void {
        this.state = state;
    }

    proceed(): void {
        this.state.proceed();
    }

    cancel(): void {
        this.state.cancel();
    }
}

const order = new Order();

order.proceed();
order.proceed();
order.cancel();
