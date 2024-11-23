interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

class BankTransferPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Bank Transfer.`);
    }
}

class Checkout {
    private paymentStrategy: PaymentStrategy;

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    processPayment(amount: number): void {
        if (!this.paymentStrategy) {
            throw new Error("No payment strategy selected.");
        }
        this.paymentStrategy.pay(amount);
    }
}

const checkout = new Checkout();

checkout.setPaymentStrategy(new CreditCardPayment());
checkout.processPayment(100);

checkout.setPaymentStrategy(new PayPalPayment());
checkout.processPayment(200);
