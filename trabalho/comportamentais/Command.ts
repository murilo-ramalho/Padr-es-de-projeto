interface Command {
    execute(): void;
}

class Light {
    turnOn() {
        console.log("Luz ligada.");
    }

    turnOff() {
        console.log("Luz desligada.");
    }
}

class TurnOnCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    private command?: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("Nenhum comando configurado.");
        }
    }
}

const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

console.log("Ligando a luz:");
remote.setCommand(turnOn);
remote.pressButton();

console.log("Desligando a luz:");
remote.setCommand(turnOff);
remote.pressButton();
