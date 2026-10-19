const meuEstoque = new Estoque();
let opcao = "";

while (opcao !== "4") {

  opcao = prompt(
    "SISTEMA DE ESTOQUE\n" +
    "----------------------------------------\n" +
    "O que deseja fazer?\n\n" +
    "1 Adicionar item\n" +
    "2 Remover item / Modificar estoque\n" +
    "3 Conferir estoque\n" +
    "4 Sair do sistema\n\n" +
    "Digite o número da opção desejada:"
  );
 
  {
     if (opcao === "1"){
      console.log("Você escolheu: Adicionar item");
        let nome = "";  
        let quantidade = 0 ;
        let dataReestoque = ""; 
        console.log ("adicionar item em qual categoria? \n 1 - cafés \n 2 - insumos alimenticios \n 3 - material limpeza/manutenção")
        let novoProduto = new Produto(nome, quantidade, categoria, dataReestoque);
    meuEstoque.adicionarProduto(novoProduto);
    alert("Produto adicionado com sucesso!");
      }
    
     else if (opcao === "2") 
     {
      console.log("Você escolheu: Remover ou Modificar estoque");
    
     } 
     
     else if (opcao === "3")
    {
      console.log("Você escolheu: Conferir estoque");
    }

     else if (opcao === "4")
    {
      console.log("Saindo do sistema... Até logo!");
      break
}
    else{
      console.log("Numero invalido")
      break
    }
  }
}