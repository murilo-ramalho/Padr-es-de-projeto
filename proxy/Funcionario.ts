enum CargoFuncionario {
  CEO,
  Gerente,
  Programador,
}

class Funcionario {
  nome: string;
  cargo: CargoFuncionario;

  contructor(nome: string, cargo: CargoFuncionario) {
    this.nome = nome;
    this.cargo = cargo;
  }
}
