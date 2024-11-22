interface Payment {
    processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

abstract class PaymentProcessor {
    abstract createPaymentMethod(): Payment;

    process(amount: number): void {
        const paymentMethod = this.createPaymentMethod();
        paymentMethod.processPayment(amount);
    }
}

class CreditCardProcessor extends PaymentProcessor {
    createPaymentMethod(): Payment {
        return new CreditCardPayment();
    }
}

class PayPalProcessor extends PaymentProcessor {
    createPaymentMethod(): Payment {
        return new PayPalPayment();
    }
}

const creditCardProcessor = new CreditCardProcessor();
creditCardProcessor.process(100);

const paypalProcessor = new PayPalProcessor();
paypalProcessor.process(50);
