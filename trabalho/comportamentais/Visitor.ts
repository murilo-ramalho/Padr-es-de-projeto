interface Visitor {
    visit(element: ConcreteElementA): void;
    visit(element: ConcreteElementB): void;
}

class ConcreteVisitor implements Visitor {
    visit(element: ConcreteElementA): void {
        console.log("Visitei o Elemento A");
    }

    visit(element: ConcreteElementB): void {
        console.log("Visitei o Elemento B");
    }
}

interface Element {
    accept(visitor: Visitor): void;
}

class ConcreteElementA implements Element {
    accept(visitor: Visitor): void {
        visitor.visit(this);
    }
}

class ConcreteElementB implements Element {
    accept(visitor: Visitor): void {
        visitor.visit(this);
    }
}

const elements: Element[] = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor();

elements.forEach(element => element.accept(visitor));
