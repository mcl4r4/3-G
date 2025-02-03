document.querySelector("#adicionarTarefa").addEventListener("click", function(){

    // seleciona o input e depois pega seu valor.
const inputTarefa = document.querySelector("#textoTarefa");
const textoTarefa = inputTarefa.value.trim().toUpperCase();

//seleciona a UL
const listaTarefas = document.querySelector("#listaTarefas");

// cria LI e adiciona a tarefa dentro dela
const li = document.createElement("li");
li.textContent = textoTarefa;

listaTarefas.appendChild(li);


})


function limparTarefas(){
    const listaTarefas = document.querySelector("#listaTarefas");

    listaTarefas.innerHTML = "";
}