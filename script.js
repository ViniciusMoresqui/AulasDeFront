const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const botao = document.getElementById('click');
const couteudo = document.getElementById('conteudo');

botao.addEventListener('click',
function () {
    
    let obj = {

        nome: nome.value,
        telefone: nome.value,
    };

    impressao(obj);
    
});

function impressao(obj){
    console.log(obj);

    const jsonObj = JSON.stringify(obj);

    let p = document.createElement('p');
    p.textContent = jsonObj;

    couteudo.appendChild(p);
}