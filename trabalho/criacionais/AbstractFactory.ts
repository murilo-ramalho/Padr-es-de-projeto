interface Button {
    render(): void;
}

interface Checkbox {
    render(): void;
}

class WindowsButton implements Button {
    render() {
        console.log("Botão Windows renderizado.");
    }
}

class WindowsCheckbox implements Checkbox {
    render() {
        console.log("Checkbox Windows renderizado.");
    }
}

class MacOSButton implements Button {
    render() {
        console.log("Botão macOS renderizado.");
    }
}

class MacOSCheckbox implements Checkbox {
    render() {
        console.log("Checkbox macOS renderizado.");
    }
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }
    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

class Application {
    constructor(private factory: GUIFactory) {}

    render() {
        const button = this.factory.createButton();
        const checkbox = this.factory.createCheckbox();
        button.render();
        checkbox.render();
    }
}

const factory = new WindowsFactory();
const app = new Application(factory);
app.render();
