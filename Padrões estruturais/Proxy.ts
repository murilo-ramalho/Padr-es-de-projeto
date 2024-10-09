interface Image {
    display(): void;
}

class RealImage implements Image {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk(): void {
        console.log(`Loading image: ${this.fileName}`);
    }

    display(): void {
        console.log(`Displaying image: ${this.fileName}`);
    }
}

class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.fileName); 
        }
        this.realImage.display();
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const imageGallery: Image[] = [
    new ProxyImage("image1.jpg"),
    new ProxyImage("image2.jpg"),
    new ProxyImage("image3.jpg")
];

console.log("Galeria de Imagens:");
imageGallery.forEach((image, index) => {
    console.log(`Imagem ${index + 1}:`);
    image.display();
});

readline.close();

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Proxy Virtual em TypeScript para simular
o carregamento preguiçoso de imagens em uma galeria de fotos. A classe `RealImage`
representa a imagem real e é responsável por carregar a imagem do disco. A classe
`ProxyImage` atua como um intermediário que controla o acesso à `RealImage`. A imagem
real só é carregada quando o método `display()` é chamado pela primeira vez, economizando
recursos e tempo ao evitar o carregamento desnecessário de imagens que podem não ser
exibidas. Esse padrão é útil em cenários onde o custo de criação ou carregamento de um
objeto é alto e pode ser evitado até que seja realmente necessário.
*/
