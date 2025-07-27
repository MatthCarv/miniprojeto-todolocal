class Tarefa {
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
    }
    criar(tarefa){
      const paragrafo=document.createElement("p");
      paragrafo.innerText = `Título: ${this.titulo} - Descrição: ${this.descricao}`;
      document.body.appendChild(paragrafo);
      const excluir=document.createElement("button");
      excluir.innerText = "excluir";
      document.body.appendChild(excluir);
      excluir.onclick = () => {
        paragrafo.remove();
        excluir.remove();
        this.excluir(tarefa);
      };
    }
    excluir(tarefa){
      tarefasArray = tarefasArray.filter((elemento) => elemento !== tarefa);
      localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
    }
}

function adicionarTarefa() {
   const titulo= document.getElementById("input_titulo").value;
   const descricao = document.getElementById("input_descricao").value;
   const tarefa = new Tarefa(titulo, descricao);
   tarefa.criar(tarefa); 
   tarefasArray.push(tarefa);
   localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
}
function limpartudo(){
    localStorage.clear();
    location.reload();
}

let tarefasJSON = []
let tarefasArray = []
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

