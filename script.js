const img = document.querySelector('img');
const btn = document.querySelector('button');
const nomePersonagem = document.querySelector('#nome');
const especiePersonagem = document.querySelector('#especie');
const statusPersonagem = document.querySelector('#status');

gerarValorAleatorio = () => {
    const numeros = [5, 50, 500];
    return Math.floor(Math.random() * numeros.length);
}
