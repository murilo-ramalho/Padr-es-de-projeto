class Order {
    public items: string[] = [];
    public shippingCost: number = 0;
    public discount: number = 0;

    getTotal(): number {
        const basePrice = this.items.length * 10;
        return basePrice + this.shippingCost - this.discount;
    }
}

interface OrderBuilder {
    addItem(item: string): OrderBuilder;
    setShippingCost(cost: number): OrderBuilder;
    applyDiscount(discount: number): OrderBuilder;
    build(): Order;
}

class OnlineOrderBuilder implements OrderBuilder {
    private order: Order;

    constructor() {
        this.order = new Order();
    }

    addItem(item: string): OrderBuilder {
        this.order.items.push(item);
        return this;
    }

    setShippingCost(cost: number): OrderBuilder {
        this.order.shippingCost = cost;
        return this;
    }

    applyDiscount(discount: number): OrderBuilder {
        this.order.discount = discount;
        return this;
    }

    build(): Order {
        return this.order;
    }
}

class OrderDirector {
    static buildBasicOrder(builder: OrderBuilder): Order {
        return builder.addItem("Item A").setShippingCost(5).build();
    }
}

const builder = new OnlineOrderBuilder();
const basicOrder = OrderDirector.buildBasicOrder(builder);
console.log(`Basic Order Total: $${basicOrder.getTotal()}`);

const customOrder = builder
    .addItem("Item B")
    .addItem("Item C")
    .setShippingCost(10)
    .applyDiscount(5)
    .build();

console.log(`Custom Order Total: $${customOrder.getTotal()}`);
