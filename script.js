const botaoht = document.getElementById("botao");
const body = document.body;

botaoht.addEventListener('click', () => {
        body.classList.toggle('modoescuro');
      });


// if (document.body.classList.contains("modoescuro")) {
//         botao.textContent = "Modo Claro ☀️";
// } 
// else {
//         botao.textContent = "Modo Escuro 🌙";
//       }
// ;