interface Shape {
    draw(color: string): void;
}

class Circle implements Shape {
    private radius: number;
    private x: number;
    private y: number;

    constructor(radius: number, x: number, y: number) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    draw(color: string): void {
        console.log(`Drawing a ${color} circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
}

class Square implements Shape {
    private side: number;
    private x: number;
    private y: number;

    constructor(side: number, x: number, y: number) {
        this.side = side;
        this.x = x;
        this.y = y;
    }

    draw(color: string): void {
        console.log(`Drawing a ${color} square at (${this.x}, ${this.y}) with side ${this.side}`);
    }
}

class ShapeFactory {
    private shapes: { [key: string]: Shape } = {};

    getCircle(radius: number, x: number, y: number): Shape {
        const key = `circle-${radius}-${x}-${y}`;
        if (!this.shapes[key]) {
            this.shapes[key] = new Circle(radius, x, y);
        }
        return this.shapes[key];
    }

    getSquare(side: number, x: number, y: number): Shape {
        const key = `square-${side}-${x}-${y}`;
        if (!this.shapes[key]) {
            this.shapes[key] = new Square(side, x, y);
        }
        return this.shapes[key];
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const shapeFactory = new ShapeFactory();

readline.question('Quantos círculos você deseja desenhar? ', (circleCount: string) => {
    const circles: Shape[] = [];
    for (let i = 0; i < parseInt(circleCount); i++) {
        const radius = Math.floor(Math.random() * 10) + 1;
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const color = `color${i + 1}`;

        const circle = shapeFactory.getCircle(radius, x, y);
        circle.draw(color);
        circles.push(circle);
    }

    readline.question('Quantos quadrados você deseja desenhar? ', (squareCount: string) => {
        const squares: Shape[] = [];
        for (let i = 0; i < parseInt(squareCount); i++) {
            const side = Math.floor(Math.random() * 10) + 1;
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            const color = `color${i + 1}`;

            const square = shapeFactory.getSquare(side, x, y);
            square.draw(color);
            squares.push(square);
        }

        readline.close();
    });
});

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Flyweight em TypeScript para um
sistema de renderização de formas geométricas. As classes `Circle` e `Square`
são as representações concretas das formas, enquanto a `ShapeFactory` gerencia a
criação e reutilização dessas formas, garantindo que formas idênticas sejam
compartilhadas para economizar memória. Ao solicitar a criação de círculos e
quadrados, o sistema reutiliza as instâncias existentes sempre que possível,
reduzindo a sobrecarga de memória. Esse padrão é útil em situações onde há
um grande número de objetos semelhantes, pois permite que os objetos compartilhem
dados comuns e mantenham a funcionalidade necessária.
*/
