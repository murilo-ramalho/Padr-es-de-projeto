interface Expression {
    interpret(context: string): boolean;
}

class ContainsKeyword implements Expression {
    constructor(private keyword: string) {}

    interpret(context: string): boolean {
        return context.includes(this.keyword);
    }
}

class IsCategory implements Expression {
    constructor(private category: string) {}

    interpret(context: string): boolean {
        return context === this.category;
    }
}

class OrExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: string): boolean {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

const categoryFilter = new IsCategory("electronics");
const keywordFilter = new ContainsKeyword("sale");
const combinedFilter = new OrExpression(categoryFilter, keywordFilter);

const searchQuery1 = "electronics";
const searchQuery2 = "discount sale";
const searchQuery3 = "furniture";

console.log(combinedFilter.interpret(searchQuery1));
console.log(combinedFilter.interpret(searchQuery2));
console.log(combinedFilter.interpret(searchQuery3));
