interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface Aggregate<T> {
    createIterator(): Iterator<T>;
}

class ListIterator<T> implements Iterator<T> {
    private index: number = 0;

    constructor(private items: T[]) {}

    next(): T {
        return this.items[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.items.length;
    }
}

class ItemList<T> implements Aggregate<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    createIterator(): Iterator<T> {
        return new ListIterator(this.items);
    }
}

const list = new ItemList<string>();
list.add("Item 1");
list.add("Item 2");
list.add("Item 3");

const iterator = list.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
