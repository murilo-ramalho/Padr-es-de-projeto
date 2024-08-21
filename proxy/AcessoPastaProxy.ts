class AcessoPastaProxy implements InterfacePasta {
  private funcionario : Funcionario;
  private acessoPasta : AcessoPasta | null = null;

  contructor(funcionario: Funcionario) {
    this.funcionario = funcionario;
  }

  acessarPasta: void {
    if(this.funcionario.cargo != CargoFuncionario.CEO || 
       this.funcionario.cargo != CargoFuncionario.Gerente) 
    {
        console.log('acesso negado');
    } else {
      this.acessoPasta = new AcessoPasta();
      this.acessoPasta.acessarPasta();
    }
  }
}
