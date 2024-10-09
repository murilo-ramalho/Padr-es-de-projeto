class TV {
    turnOn(): void {
        console.log("TV  ON.");
    }

    turnOff(): void {
        console.log("TV  OFF.");
    }

    setChannel(channel: number): void {
        console.log(`TV channel set to ${channel}.`);
    }
}

class DVDPlayer {
    turnOn(): void {
        console.log("DVD Player is now ON.");
    }

    turnOff(): void {
        console.log("DVD Player is now OFF.");
    }

    play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

class Speakers {
    turnOn(): void {
        console.log("Speakers are now ON.");
    }

    turnOff(): void {
        console.log("Speakers are now OFF.");
    }

    setVolume(volume: number): void {
        console.log(`Speakers volume set to ${volume}.`);
    }
}

class HomeTheaterFacade {
    private tv: TV;
    private dvdPlayer: DVDPlayer;
    private speakers: Speakers;

    constructor(tv: TV, dvdPlayer: DVDPlayer, speakers: Speakers) {
        this.tv = tv;
        this.dvdPlayer = dvdPlayer;
        this.speakers = speakers;
    }

    watchMovie(movie: string): void {
        console.log("Getting ready to watch a movie...");
        this.tv.turnOn();
        this.speakers.turnOn();
        this.speakers.setVolume(10);
        this.dvdPlayer.turnOn();
        this.dvdPlayer.play(movie);
    }

    endMovie(): void {
        console.log("Shutting down the home theater...");
        this.tv.turnOff();
        this.speakers.turnOff();
        this.dvdPlayer.turnOff();
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const homeTheater = new HomeTheaterFacade(new TV(), new DVDPlayer(), new Speakers());

readline.question('Digite o nome do filme para assistir: ', (movie: string) => {
    homeTheater.watchMovie(movie);
    readline.question('Pressione Enter para encerrar o filme...', () => {
        homeTheater.endMovie();
        readline.close();
    });
});

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Facade em TypeScript para um sistema
de entretenimento doméstico. A classe `HomeTheaterFacade` atua como uma fachada
que simplifica a interação com os subsistemas (TV, DVD Player, Alto-falantes).
Quando o usuário deseja assistir a um filme, a fachada liga todos os dispositivos
necessários e ajusta as configurações adequadas. Após a exibição, o usuário pode
encerrar o filme, e a fachada desliga todos os dispositivos de forma conveniente.
Esse padrão permite que a complexidade dos subsistemas seja encapsulada, tornando a
interface do sistema de entretenimento mais amigável e fácil de usar.
*/
