interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver() {
        console.log("Entrega feita por caminhão.");
    }
}

class Ship implements Transport {
    deliver() {
        console.log("Entrega feita por navio.");
    }
}

abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

function clientCode(logistics: Logistics) {
    logistics.planDelivery();
}

console.log("Logística rodoviária:");
clientCode(new RoadLogistics());

console.log("Logística marítima:");
clientCode(new SeaLogistics());
