    abstract class DataProcessor {
    processData(): void {
        this.readData();
        this.process();
        this.saveData();
    }

    protected abstract readData(): void;
    protected abstract process(): void;
    protected abstract saveData(): void;
}

class CSVDataProcessor extends DataProcessor {
    protected readData(): void {
        console.log("Lendo dados CSV...");
    }

    protected process(): void {
        console.log("Processando dados CSV...");
    }

    protected saveData(): void {
        console.log("Salvando dados CSV...");
    }
}

const processor = new CSVDataProcessor();
processor.processData();
