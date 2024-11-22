abstract class DiscountHandler {
    protected nextHandler?: DiscountHandler;

    setNext(handler: DiscountHandler): DiscountHandler {
        this.nextHandler = handler;
        return handler;
    }

    handleDiscount(amount: number): number {
        if (this.nextHandler) {
            return this.nextHandler.handleDiscount(amount);
        }
        return amount;
    }
}

class MembershipDiscount extends DiscountHandler {
    handleDiscount(amount: number): number {
        if (amount > 100) {
            console.log("Membership discount applied: -10%");
            amount *= 0.9;
        }
        return super.handleDiscount(amount);
    }
}

class SeasonalDiscount extends DiscountHandler {
    handleDiscount(amount: number): number {
        console.log("Seasonal discount applied: -5%");
        amount *= 0.95;
        return super.handleDiscount(amount);
    }
}

class BlackFridayDiscount extends DiscountHandler {
    handleDiscount(amount: number): number {
        console.log("Black Friday discount applied: -20%");
        amount *= 0.8;
        return super.handleDiscount(amount);
    }
}

const baseAmount = 200;

const handler = new MembershipDiscount();
handler.setNext(new SeasonalDiscount()).setNext(new BlackFridayDiscount());

const finalAmount = handler.handleDiscount(baseAmount);
console.log(`Final amount after discounts: $${finalAmount.toFixed(2)}`);
