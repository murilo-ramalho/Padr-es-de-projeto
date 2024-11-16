interface Prototype {
    clone(): Prototype;
}

class Document implements Prototype {
    constructor(public title: string, public content: string) {}

    clone(): Prototype {
        return new Document(this.title, this.content);
    }

    display() {
        console.log(`Título: ${this.title}, Conteúdo: ${this.content}`);
    }
}

const originalDoc = new Document("Relatório", "Este é o conteúdo original.");
console.log("Documento original:");
originalDoc.display();

const clonedDoc = originalDoc.clone() as Document;
clonedDoc.title = "Cópia do Relatório";
console.log("Documento clonado:");
clonedDoc.display();
