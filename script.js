class Tarefa {
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
    }
    criar(){
      const paragrafo=document.createElement("p");
      paragrafo.innerText = `Título: ${this.titulo} - Descrição: ${this.descricao}`;
      document.body.appendChild(paragrafo);
    }
}

function adicionarTarefa() {
   const titulo= document.getElementById("input_titulo").value;
   const descricao = document.getElementById("input_descricao").value;
   const tarefa = new Tarefa(titulo, descricao);
   tarefa.criar(); 
   tarefasArray.push(tarefa);
   
   tarefasArray.forEach((element) => console.log(element));
   localStorage.setItem('tarefa', JSON.stringify(tarefasArray));
}
function limpartudo(){
    localStorage.clear();
    location.reload();
}

let tarefasArray = []
if (localStorage.getItem('tarefa') !== null){
   tarefasArray = JSON.parse(localStorage.getItem('tarefa'));
   tarefasArray.forEach((element) => {
      const tarefa = new Tarefa(element.titulo, element.descricao);
      tarefa.criar(); 
   });
}

