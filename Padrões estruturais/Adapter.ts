interface Target {
    request(input: string): void;
}

class IncompatibleService {
    specificRequest(input: string): string {
        return input.split("").reverse().join("");  // Inverte a string
    }
}

class Adapter implements Target {
    private service: IncompatibleService;

    constructor(service: IncompatibleService) {
        this.service = service;
    }

    request(input: string): void {
        console.log("Adapter received:", input);
        console.log("Adapter sends to service...");
        const result = this.service.specificRequest(input);
        console.log("Incompatible Service processed:", result);
    }
}

class Client {
    private target: Target;

    constructor(target: Target) {
        this.target = target;
    }

    makeRequest(input: string): void {
        this.target.request(input);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma mensagem para o cliente: ', (input: string) => {
    const service = new IncompatibleService();

    const adapter = new Adapter(service);

    const client = new Client(adapter);

    client.makeRequest(input);

    readline.close();
});

/*
    Murilo Ramalho da Mata
    Camila Gomes da Silva Casa
    
    O código implementa o padrão Adapter em TypeScript. O cliente espera
    a função 'request()', mas o serviço disponível tem a função 'specificRequest()',
    incompatível com o esperado. O Adapter faz essa adaptação, permitindo que o cliente
    use a interface 'request()', enquanto o Adapter traduz essa chamada para o método
    'specificRequest()' do serviço. Neste caso, o serviço inverte a string fornecida.
    O cliente interage via CLI, fornecendo um texto que é processado pelo serviço.
*/
