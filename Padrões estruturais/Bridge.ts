interface Device {
    on(): void;
    off(): void;
    setVolume(volume: number): void;
    getVolume(): number;
}

class TV implements Device {
    private volume: number = 10;

    on(): void {
        console.log("TV is now ON.");
    }

    off(): void {
        console.log("TV is now OFF.");
    }

    setVolume(volume: number): void {
        this.volume = volume;
        console.log(`TV volume set to ${this.volume}.`);
    }

    getVolume(): number {
        return this.volume;
    }
}

class Radio implements Device {
    private volume: number = 5;

    on(): void {
        console.log("Radio is now ON.");
    }

    off(): void {
        console.log("Radio is now OFF.");
    }

    setVolume(volume: number): void {
        this.volume = volume;
        console.log(`Radio volume set to ${this.volume}.`);
    }

    getVolume(): number {
        return this.volume;
    }
}

abstract class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    abstract on(): void;
    abstract off(): void;
    abstract setVolume(volume: number): void;
}

class BasicRemote extends RemoteControl {
    on(): void {
        this.device.on();
    }

    off(): void {
        this.device.off();
    }

    setVolume(volume: number): void {
        this.device.setVolume(volume);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Escolha um dispositivo (1 - TV, 2 - Radio): ', (deviceChoice: string) => {
    let device: Device;

    if (deviceChoice === '1') {
        device = new TV();
    } else if (deviceChoice === '2') {
        device = new Radio();
    } else {
        console.log('Opção inválida. Usando TV por padrão.');
        device = new TV();
    }

    const remote = new BasicRemote(device);

    remote.on();
    readline.question('Digite o volume (0-100): ', (volume: string) => {
        remote.setVolume(parseInt(volume));
        remote.off();
        readline.close();
    });
});

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Bridge em TypeScript, separando a
abstração do controle remoto da implementação dos dispositivos (TV e Rádio).
O controle remoto básico pode controlar diferentes dispositivos sem modificar sua
lógica interna. O usuário escolhe um dispositivo (TV ou Rádio) e pode definir o
volume através da interface CLI. Isso permite uma fácil extensão do sistema,
adicionando novos dispositivos sem alterar o controle remoto existente.
*/
