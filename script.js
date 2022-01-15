const img = document.querySelector('img');
const btn = document.querySelector('button');
const nomePersonagem = document.querySelector('#nome');
const especiePersonagem = document.querySelector('#especie');
const statusPersonagem = document.querySelector('#status');

gerarValorAleatorio = () => {
    const numeros = [5, 50, 500];
    const index = Math.floor(Math.random() * numeros.length);
    const numGerado = numeros[index];
    return numGerado;
}

getPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${gerarValorAleatorio()}`, {
        method:'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img.src = data.image;
        img.alt = data.name;
        nomePersonagem.innerHTML = data.name;
        especiePersonagem.innerHTML = data.species;
        statusPersonagem.innerHTML = data.status;
    });
}
botao.onclick = getPersonagem;