let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input'). value;

    if (chute == numerosecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute >  numerosecreto){
    exibirTextoNaTela ('p', ' O numero secreto é menor');
        } else {
            exibirTextoNaTela ('P', 'O numero secreto é maior');

        }
        tentativas++;
           limparcampo();
        
    }
 }

 function gerarNumeroAleatorio() {
   let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if( quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
         console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
 }

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
limparcampo ();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}