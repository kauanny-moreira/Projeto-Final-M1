let nome = prompt("Qual é o seu nome?");
alert("Seja bem vindo(a) ao 'Big Bite', " + nome + "!");


const botaoht = document.getElementById("botao");
const body = document.body;

botaoht.addEventListener('click', () => {
    body.classList.toggle('modoescuro');
});

var listaProdutos = [
    { id:1, img: "hamburguer1.png", titulo: "Marquês de Beef", descricao: "Carne bovina envolvida em massa folhada, acompanhada de molho madeira e purê de batata.", preco: "40,00" },
    { id:2, img: "hamburguer2.png", titulo: "Nova York Classic", descricao: " Clássico americano com queijo cheddar, bacon crocante e cebola caramelizada em pão brioche.", preco: "50,00" },
    { id:3, img: "hamburguer3.png", titulo: "Toscana Trufado", descricao: "Hambúrguer de carne bovina com queijo gorgonzola, trufas negras e rúcula, em pão artesanal.", preco:"45,00"},
    { id:4, img: "hamburguer4.png", titulo: "Mediterrâneo", descricao: "Hambúrguer de cordeiro com molho tzatziki, tomate seco e cebola roxa em pão pita.", preco: "45,00" },
    { id:5, img: "hamburguer5.png", titulo: "Vegetariano", descricao: "Pão, hambúrguer de grão de bico, homus, tomate seco e rúcula.", preco: "40,00" },
    { id:6, img: "hamburguer6.png", titulo:"Cogumelos Trufados", descricao: "Pão, hambúrguer de cogumelos, queijo brie, azeite trufado e rúcula.", preco: "50,00" },
]


function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        document.getElementById("produtos").innerHTML+=`<li class="card">
            <div  class="divphoto"><img class="imgproduct" src="${listaProdutos[i].img}"></div>    
            <h3  class="nomeproduto">${listaProdutos[i].titulo}</h3>
            <p class="descricao">${listaProdutos[i].descricao} </p>
            <p class="descricao-preco" > <strong> R$${listaProdutos[i].preco} </strong></p>
            <button id="botao" class="hamburguerInfo--addButton" onclick="adicionarNoCarrinho(${i})" >Adicionar ao Carrinho</button>
            </li>
            `
    }
}

exibirLista();





// Criar a variável modalKey global
let modalKey = 0;

// Variável para controlar a quantidade inicial de hambúrgueres na modal
let quantHamburguer = 1;
let cart = []; // Carrinho como array
let size = 'P'; // Variável para armazenar o tamanho do hambúrguer (pode ser P, M, G)

// Funções auxiliares
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elementos) => document.querySelectorAll(elementos);

const FormatoReal = (valor) => {
    return valor ? valor.toFixed(2) : "0.00";
};

const PreencheDadosDoHamburguer = (hamburgueritem, item, index) => {
    // Atributo para identificar qual elemento foi clicado
    hamburgueritem.setAttribute('data-key', index);
    hamburgueritem.querySelector('.hamburguer-item--price').innerHTML = `R$ ${FormatoReal(item.price[2])}`;
    hamburgueritem.querySelector('.hamburguer-item--name').innerHTML = item.name;
    hamburgueritem.querySelector('.hamburguer-item--desc').innerHTML = item.description;
};

const pegarkey = (e) => {
    // Closest retorna o elemento mais próximo que tem a classe que passamos
    // do hamburguer-item ele vai pegar o valor do atributo data-key
    let key = e.target.closest('.hamburguer-item').getAttribute('data-key');
    console.log("hamburguer clicado + key");
    console.log(listaProdutos[key]);

    // garantir que a quantidade inicial de hamburguers é 1 
    quantHamburguer = 1;

    // Para manter a informação de qual hamburguer foi clicado 
    modalKey = key;
    return key;
};

// Aumentar a quantidade de hambúrgueres
// const MudarQuantidade = () => {
//     seleciona('#diminuir').addEventListener('click', () => {
//         if (quantHamburguer > 1) {
//             quantHamburguer--;
//             seleciona('.hamburguerinfo--qt').innerHTML = quantHamburguer;
//         }
//     });

//     seleciona('#aumentar').addEventListener('click', () => {
//         quantHamburguer++;
//         seleciona('.hamburguerinfo--qt').innerHTML = quantHamburguer;
//     });
// };

const adicionarNoCarrinho = (index) =>  {
    console.log('Adicionar No Carrinho');

    // Pegar dados da janela modal atual
    // console.log("Hamburguer: " + modalKey);
    // console.log("Quant.: " + quantHamburguer);

    // Preço
     let price = listaProdutos[index].preco;
     price = parseFloat(price);

    // Criar identificador único
    let identificador = listaProdutos[index].id;

    // Verificar se já existe o item no carrinho
    let key = cart.findIndex((item) => item.id === identificador);
    
    if (key > 1) {
        // Se já existir, aumentar a quantidade
        cart[key].qt += quantHamburguer;
    } else {
        // Criar novo item no carrinho
        let hamburguer = {
            identificador: identificador,
            id: listaProdutos[modalKey].id,
            size: size,
            qt: quantHamburguer,
            price: price
        };

        cart.push(hamburguer);
    }

    console.log(cart);
    console.log("Sub total R$ " + (cart[key]?.qt * cart[key]?.price).toFixed(2));

    // fecharCarrinho();
    abrirCarrinho();
    atualizarCarrinho();
};
// function adicionarNoCarrinho(event) {
//   const index = event.target.dataset.index;
//   const produto = listaProdutos[index];
//   const identificador = produto.id;
//   const price = parseFloat(produto.preco);
//   let itemCarrinho = cart.find(item => item.identificador === identificador);
//   if (itemCarrinho) {
//       itemCarrinho.qt += quantHamburguer;
//   } else {
//       cart.push({ identificador, id: produto.id, size, qt: quantHamburguer, price });
//   }
//   atualizarCarrinho();
//   abrirCarrinho();
// }


// const adicionarNoCarrinho = () => {
//     // console.log(seleciona('.hamburguerInfo--addButton'))
//     // seleciona('.hamburguerInfo--addButton').addEventListener('click', )
// }

const abrirCarrinho = () => {
    console.log('Qtd de itens no carrinho: ' + cart.length);
    if (cart.length > 0) {
        seleciona('aside').classList.add('show');
        seleciona('aside').style.left = '0';
    }
};

// const fecharCarrinho = () => {
//     seleciona('.menu-closer').addEventListener('click', () => {
//         seleciona('aside').style.left = '100vw'; // Oculta o carrinho
//         seleciona('header').style.display = 'flex';
//     });
// };

const atualizarCarrinho = () => {
    // Exibir número de itens no carrinho
    seleciona('aside span').innerHTML = cart.length;
    seleciona('aside div').classList.add("quantityCart")

    // Verificar se o carrinho tem itens
    if (cart.length > 0) {
        seleciona('aside').classList.add('show');

        // Limpar carrinho antes de atualizar
        seleciona('.cart').innerHTML = '';

        // Criar variáveis para cálculo
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        // Loop para calcular subtotal e exibir os itens no carrinho
        cart.forEach((item) => {
            subtotal += item.qt * item.price;
            //buscando index (posicao) do elemento pelo seu id
            let index = listaProdutos.findIndex(produto => produto.id === item.identificador)

            console.log("index: ",listaProdutos[index].titulo)
            // Exibir cada item no carrinho
            let itemCarrinho = document.createElement('div');
            itemCarrinho.classList.add('cart-item');
            itemCarrinho.innerHTML = `
                <span>${listaProdutos[index].titulo} (${item.size})</span>
                <span>R$ ${item.price.toFixed(2)}</span>
                <span>Quantidade: ${item.qt}</span>
            `;
            seleciona('.cart').appendChild(itemCarrinho);
        });

        desconto = subtotal * 0.1; // Exemplo de 10% de desconto
        total = subtotal - desconto;

        console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
        console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
        console.log(`Total: R$ ${total.toFixed(2)}`);
    }
};

//Chamar funções de abertura, atualização e fechamento do carrinho

adicionarNoCarrinho();
atualizarCarrinho();
// fecharCarrinho();
// MudarQuantidade();