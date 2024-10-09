interface FileSystemComponent {
    getName(): string;
    showDetails(indent?: string): void;
}

class File implements FileSystemComponent {
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}File: ${this.name}`);
    }
}

class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: FileSystemComponent): void {
        this.children = this.children.filter(child => child !== component);
    }

    showDetails(indent: string = ''): void {
        console.log(`${indent}Directory: ${this.name}`);
        for (const child of this.children) {
            child.showDetails(indent + '  ');
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const createFileSystem = () => {
    const root = new Directory('root');

    const dir1 = new Directory('dir1');
    const dir2 = new Directory('dir2');

    const file1 = new File('file1.txt');
    const file2 = new File('file2.txt');
    const file3 = new File('file3.txt');

    dir1.add(file1);
    dir1.add(file2);

    dir2.add(file3);
    root.add(dir1);
    root.add(dir2);

    return root;
};

const root = createFileSystem();
root.showDetails();

/*
Murilo Ramalho da Mata
Camila Gomes da Silva Casa

Este código implementa o padrão Composite em TypeScript, permitindo
que pastas (Directory) contenham tanto arquivos (File) quanto outras pastas. O
sistema de arquivos é representado como uma estrutura hierárquica onde cada
componente (arquivo ou pasta) pode ser tratado de maneira uniforme através da
interface `FileSystemComponent`. O método `showDetails()` exibe a estrutura
do sistema de arquivos de forma indentada, mostrando a relação entre pastas e
arquivos. Isso permite que novas pastas ou arquivos sejam adicionados facilmente
sem alterar a estrutura existente.
*/
