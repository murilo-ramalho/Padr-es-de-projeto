// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        BancoFacade bancoFacade = new BancoFacade();

        ContaBancaria conta1 = bancoFacade.criarConta("12345", "João Silva");
        ContaBancaria conta2 = bancoFacade.criarConta("67890", "Maria Oliveira");

        bancoFacade.depositar(conta1, 1000.0);
        bancoFacade.depositar(conta2, 500.0);

        bancoFacade.sacar(conta1, 200.0);

        bancoFacade.transferir(conta1, conta2, 300.0);

        System.out.println("Saldo da conta " + conta1.getNumero() + ": " + bancoFacade.verificarSaldo(conta1));
        System.out.println("Saldo da conta " + conta2.getNumero() + ": " + bancoFacade.verificarSaldo(conta2));
    }
}