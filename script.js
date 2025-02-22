const botaoht = document.getElementById("botao");
const body = document.body;

botaoht.addEventListener("click", function(){
  body.classList.toggle("modoescuro")
})


var listaProdutos = [
      { img: "hamburguer1.png", titulo: "Marquês de Beef", descricao: "Carne bovina envolvida em massa folhada, acompanhada de molho madeira e purê de batata.", preco: "Preço: R$40,00" },
      { img: "hamburguer2.png", titulo: "Nova York Classic", descricao: " Clássico americano com queijo cheddar, bacon crocante e cebola caramelizada em pão brioche.", preco: "Preço: R$50,00" },
      { img: "hamburguer3.png", titulo: "Toscana Trufado", descricao: "Hambúrguer de carne bovina com queijo gorgonzola, trufas negras e rúcula, em pão artesanal.", preco:"Preço: R$45,00"},
      { img: "hamburguer4.png", titulo: "Mediterrâneo", descricao: "Hambúrguer de cordeiro com molho tzatziki, tomate seco e cebola roxa em pão pita.", preco: "Preço: R$45,00" },
      { img: "hamburguer5.png", titulo: "Vegetariano", descricao: "Pão, hambúrguer de grão de bico, homus, tomate seco e rúcula.", preco: "Preço: R$40,00" },
      { img: "hamburguer6.png", titulo:"Cogumelos Trufados", descricao: "Pão, hambúrguer de cogumelos, queijo brie, azeite trufado e rúcula.", preco: "Preço: R$50,00" },
  ]
  
  
  function exibirLista() {
      for (var i = 0; i < listaProdutos.length; i++) {
          document.getElementById("produtos").innerHTML+=`<li class="card">
              <div  class="divphoto"><img class="imgproduct" src="${listaProdutos[i].img}"></div>    
              <h3  class="nomeproduto">${listaProdutos[i].titulo}</h3>
              <p class="descricao">${listaProdutos[i].descricao} </p>
              <p class="descricao-preco" > <strong>${listaProdutos[i].preco} </strong></p>
              <button id= "botao" >Adicionar ao Carrinho</button>
              </li>
              `
      }
  }
  
  exibirLista();


  let nome = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a) ao 'Big Bite', " + nome + "!");