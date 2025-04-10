// addEvemtListener()

const entrada = document.getElementById('entrada');
const botao = document.getElementById('add');
const lista = document.getElementById('lista');
const remover = document.getElementById('remover');

const vetor = [];

botao.addEventListener('click', function(){
    let item = entrada.value;
    vetor.push(item);
    entrada.value = "";
    console.log(vetor);

    saida();
});

function saida(){
    lista.innerHTML = "";

    for(let i = 0; i < vetor.length; i++){
        let li = document.createElement("li");
        li.textContent = vetor[i];
        lista.appendChild(li); 
    } 
}

remover.addEventListener('click', function(){
    vetor.pop();
    saida();
});