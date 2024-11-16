abstract class Handler {
    private nextHandler?: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handleRequest(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class AuthHandler extends Handler {
    handleRequest(request: string): void {
        if (request === "auth") {
            console.log("Autenticação realizada.");
        } else {
            console.log("Autenticação não aplicável, passando adiante.");
            super.handleRequest(request);
        }
    }
}

class DataHandler extends Handler {
    handleRequest(request: string): void {
        if (request === "data") {
            console.log("Dados processados.");
        } else {
            console.log("Dados não aplicáveis, passando adiante.");
            super.handleRequest(request);
        }
    }
}

const auth = new AuthHandler();
const data = new DataHandler();

auth.setNext(data);

console.log("Teste 1:");
auth.handleRequest("auth");

console.log("Teste 2:");
auth.handleRequest("data");

console.log("Teste 3:");
auth.handleRequest("other");
