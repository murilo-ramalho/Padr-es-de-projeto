public class ContaBancaria {
    private String numero;
    private String titular;
    private double saldo;

    public ContaBancaria(String numero, String titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0.0;
    }

    public String getNumero() {
        return numero;
    }

    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depositado: " + valor);
        } else {
            System.out.println("Valor de depósito inválido!");
        }
    }

    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Sacado: " + valor);
        } else {
            System.out.println("Valor de saque inválido ou saldo insuficiente!");
        }
    }

    public void transferir(ContaBancaria destino, double valor) {
        if (valor > 0 && valor <= saldo) {
            this.sacar(valor);
            destino.depositar(valor);
            System.out.println("Transferido: " + valor + " para a conta " + destino.getNumero());
        } else {
            System.out.println("Valor de transferência inválido ou saldo insuficiente!");
        }
    }

    public double consultarSaldo() {
        return saldo;
    }
}
