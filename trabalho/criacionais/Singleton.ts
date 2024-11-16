class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: Map<string, string> = new Map();

    private constructor() {}

    static getInstance(): ConfigurationManager {
        if (!this.instance) {
            this.instance = new ConfigurationManager();
        }
        return this.instance;
    }

    setSetting(key: string, value: string) {
        this.settings.set(key, value);
    }

    getSetting(key: string): string | undefined {
        return this.settings.get(key);
    }
}

const config1 = ConfigurationManager.getInstance();
config1.setSetting("theme", "dark");

const config2 = ConfigurationManager.getInstance();
console.log("Tema configurado:", config2.getSetting("theme"));

console.log(config1 === config2);
