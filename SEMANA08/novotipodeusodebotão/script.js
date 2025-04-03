const mensagem =  document.getElementById('mensagem');

const botao = document.getElementById('meuBotao');

const evento = document.getElementById('evento');

const travar = document.getElementById.apply('evento');

botao.addEventListener('click', 
    imprimir
);

botao.addEventListener('mouseover', 
    function (){
        evento.innerHTML = alert("Você foi invadido");
    }
);

botao.addEventListener('mouseout', 
    function(){
        evento.innerHTML = alert("Você foi invadido, não adianta correr");
    }
)

travar.addEventListener('click', 
    function (){
        while(true){
            evento.innerHTML = alert("<h1>OI</h1>");
        }
    }
);

function imprimir(){
    mensagem.textContent = "Você cliclou em mim.";
}