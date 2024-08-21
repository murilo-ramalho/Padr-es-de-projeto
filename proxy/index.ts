const funcionario = new Funcionario('clebão', CargoFuncionario.CEO);
const proxy = new AcessoPastaProxy (funcionario);
proxy.acessarPasta();
