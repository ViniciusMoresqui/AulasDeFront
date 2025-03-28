function lerNumero1(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1;
}

function lerNumero2(){
    var numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2;
}

function soma() {
    let resultado = lerNumero1() + lerNumero2();
    document.getElementById('resultado').innerText = resultado;
}

function menos() {
    let resultado = lerNumero1() - lerNumero2();
    document.getElementById('resultado').innerText = resultado;
}

function vezes() {
    let resultado = lerNumero1() * lerNumero2();
    document.getElementById('resultado').innerText = resultado;
}

function divisao() {
    if(numero2 === 0){
        document.getElementById('resultado').innerText = "Divisão por zero";
    }else{
        let resultado = lerNumero1() / lerNumero2();
        document.getElementById('resultado').innerText = resultado;
    }
}