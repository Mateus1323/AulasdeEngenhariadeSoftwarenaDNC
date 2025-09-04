var setaDireita = window.document.getElementById('seta-direita');
var Leonardo = window.document.getElementById('Leonardo');
var Samantha = window.document.getElementById('Samantha');
var Bruna = window.document.getElementById('Bruna');
var setaEsquerda = window.document.getElementById('seta-esquerda');

function rolarParaDireita() {
    Leonardo.style = 'display: none';
    Bruna.style = 'display: flex';
    setaDireita.style = 'display: none';
    setaEsquerda.style = 'display: flex';
}
function rolarParaEsquerda() {
    Bruna.style = 'display: none';
    Leonardo.style = 'display: flex';
    setaEsquerda.style = 'display: none';
    setaDireita.style = 'display: flex; margintop: 5px';
}