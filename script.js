class Tarefa {
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
    }
    criar(tarefa){
      const container = document.getElementById("container");
      const card = document.createElement("div");
      card.classList.add("card");
      container.appendChild(card);

      const paragrafo=document.createElement("p");
      paragrafo.innerHTML = "<b>"+this.titulo+"</b> <br/> <br/> <small>"+this.descricao;+"</small>"
      card.appendChild(paragrafo);

      const excluir=document.createElement("button");
      excluir.innerText = "Excluir";
      card.appendChild(excluir);
      excluir.onclick = () => {
        card.remove();
        this.excluir(tarefa);
      };
    }
    excluir(tarefa){
      tarefasArray = tarefasArray.filter((elemento) => elemento !== tarefa);
      localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
    }
}

function adicionarTarefa() {

}
function limparTudo(){
    localStorage.clear();
    location.reload();
}

const barraPesquisa = document.getElementById("input_pesquisa");
barraPesquisa.addEventListener("input", (event) => {
   const pesquisa = document.getElementById("input_pesquisa").value;
   const cards = document.getElementsByClassName('card');
   for (let i = 0; i < cards.length; i++) {
        const paragrafo = cards[i].querySelector('p').textContent;
         if (paragrafo.includes(pesquisa)) {
            cards[i].style.display = 'inline';
        } else {
            cards[i].style.display = 'none';
        }
    }
 })

const form = document.getElementById("formTarefa");
form.addEventListener("submit", () =>{
   const titulo= document.getElementById("input_titulo").value;
   const descricao = document.getElementById("input_descricao").value;
   const tarefa = new Tarefa(titulo, descricao);
   tarefa.criar(tarefa); 
   tarefasArray.push(tarefa);
   localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
})


let tarefasJSON = [];
let tarefasArray = [];
if (localStorage.getItem('tarefa') !== null){
   tarefasJSON = JSON.parse(localStorage.getItem('tarefa'));
   tarefasJSON.forEach((element) => {
      const titulo = element.titulo;
      const descricao = element.descricao;
      const tarefa = new Tarefa(titulo, descricao);
      tarefa.criar(tarefa);
      tarefasArray.push(tarefa);
   });
}

