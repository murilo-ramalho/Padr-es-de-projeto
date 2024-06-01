public class BancoFacade {
    public ContaBancaria criarConta(String numero, String titular) {
        return new ContaBancaria(numero, titular);
    }

    public void depositar(ContaBancaria conta, double valor) {
        conta.depositar(valor);
    }

    public void sacar(ContaBancaria conta, double valor) {
        conta.sacar(valor);
    }

    public void transferir(ContaBancaria origem, ContaBancaria destino, double valor) {
        origem.transferir(destino, valor);
    }

    public double verificarSaldo(ContaBancaria conta) {
        return conta.consultarSaldo();
    }
}
