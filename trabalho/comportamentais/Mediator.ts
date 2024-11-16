interface Mediator {
    send(message: string, colleague: Colleague): void;
}

abstract class Colleague {
    constructor(protected mediator: Mediator) {}

    abstract receive(message: string): void;
}

class User extends Colleague {
    receive(message: string): void {
        console.log(`Usuário recebeu: ${message}`);
    }

    send(message: string): void {
        this.mediator.send(message, this);
    }
}

class ChatMediator implements Mediator {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    send(message: string, colleague: Colleague): void {
        this.users.forEach(user => {
            if (user !== colleague) {
                user.receive(message);
            }
        });
    }
}

const mediator = new ChatMediator();

const user1 = new User(mediator);
const user2 = new User(mediator);
const user3 = new User(mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.send("Olá a todos!");
