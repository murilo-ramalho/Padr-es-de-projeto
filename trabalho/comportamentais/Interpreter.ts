interface Expression {
    interpret(context: string): boolean;
}

class TerminalExpression implements Expression {
    constructor(private data: string) {}

    interpret(context: string): boolean {
        return context.includes(this.data);
    }
}

class AndExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: string): boolean {
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}

const isJava = new TerminalExpression("Java");
const isPython = new TerminalExpression("Python");
const isJavaAndPython = new AndExpression(isJava, isPython);

const context = "Java and Python are popular programming languages.";

console.log("Contains Java?", isJava.interpret(context)); // true
console.log("Contains Python?", isPython.interpret(context)); // true
console.log("Contains both Java and Python?", isJavaAndPython.interpret(context)); // true
