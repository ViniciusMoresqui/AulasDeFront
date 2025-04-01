function expressao(parametro){
 
    document.getElementById('tela').value += parametro;
    parametro;
}

function resultado(){
    //EVALL()

    try{
        let expressao = document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value = resultado;
    } catch (error){
        document.getElementById('tela').value = "Error";
    }
}

function limpar(){
    document.getElementById('tela').value = "";
}