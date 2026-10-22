class Estoque{
  constructor(){
    this.itens = [];
  }

  removerItem(item){
    if(this.itens.includes(item)){
      this.itens.splice(this.itens.indexOf(item), 1);
    }
    else{
      console.log("Item não encontrado no estoque.");
    }
  }
}
const meuEstoque = new Estoque();
let opcao = "";

while (opcao !== "4") {
  opcao = prompt(
    "SISTEMA DE ESTOQUE\n" +
    "----------------------------------------\n" +
    "O que deseja fazer?\n\n" +
    "1 Adicionar item\n" +
    "2 Remover item \n" +
    "3 Modificar item\n" +
    "4 Conferir estoque\n" +
    "5 Sair do sistema\n\n" +
    "Digite o número da opção desejada:"
  );
 
  {
    if (opcao === "1") {
      console.log("Você escolheu: Adicionar item");
      
      let categoriaOpcao = prompt(
        "Adicionar item em qual categoria?\n" +
        "1 - Cafés\n" +
        "2 - Insumos alimentícios\n" +
        "3 - Material limpeza/manutenção"
      );
  
      let categoria = "";
      if (categoriaOpcao === "1") categoria = "Cafés";
      else if (categoriaOpcao === "2") categoria = "Insumos alimentícios";
      else if (categoriaOpcao === "3") categoria = "Material limpeza/manutenção";
      else {
        alert("Categoria inválida! Operação cancelada.");
        continue; 
      }
      if (categoriaOpcao === "1") { 
        console.log("Categoria selecionada: Cafés");
      }
      else if (categoriaOpcao === "2") {
        console.log("Categoria selecionada: Insumos alimentícios");
      }
      else if (categoriaOpcao === "3") {
        console.log("Categoria selecionada: Material limpeza/manutenção");
      }
      else {
        console.log("Categoria inválida! Operação cancelada.")
      }
      
      let nome = prompt("Digite o nome do produto:");
      let quantidade = Number(prompt("Digite a quantidade inicial:"));
      let dataReestoque = prompt("Digite a data de reestoque (dd/mm/aaaa):");
  
      let novoProduto = new Produto(nome, quantidade, categoria, dataReestoque);
      meuEstoque.adicionarProduto(novoProduto);
      
      alert(`Produto "${nome}" adicionado com sucesso na categoria [${categoria}]!`);
      }
    
     else if (opcao === "2") 
     {
      console.log("Você escolheu: Remover");
      let nomeProduto = prompt("Digite o nome do produto que deseja remover:");
      meuEstoque.removerItem(nomeProduto);
    
     } 
     
     else if (opcao === "3"){
      console.log("Você escolheu: Modificar item");
      let nomeProduto = prompt("Digite o nome do produto que deseja modificar:");
      let produtoEncontrado = meuEstoque.itens.find(item => item.nome === nomeProduto);
  
      if (produtoEncontrado) {
        let novaQuantidade = Number(prompt("Digite a nova quantidade:"));
        let novaDataReestoque = prompt("Digite a nova data de reestoque (dd/mm/aaaa):");
  
        produtoEncontrado.quantidade = novaQuantidade;
        produtoEncontrado.dataReestoque = novaDataReestoque;
  
        alert(`Produto "${nomeProduto}" modificado com sucesso!`);
      } else {
        alert(`Produto "${nomeProduto}" não encontrado no estoque.`);
      }
     }

     else if (opcao === "4")
    {
      console.log("Você escolheu: Conferir estoque");
      if (meuEstoque.itens.length === 0) {
        alert("O estoque está vazio.");
      } else {
        let estoqueString = "Itens no estoque:\n\n";
        meuEstoque.itens.forEach((item, index) => {
          estoqueString += `${index + 1}. Nome: ${item.nome}, Quantidade: ${item.quantidade}, Categoria: ${item.categoria}, Data de Reestoque: ${item.dataReestoque}\n`;
        });
        alert(estoqueString);
      }
    }

     else if (opcao === "5")
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