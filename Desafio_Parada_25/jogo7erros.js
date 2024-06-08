let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementById('lista-desenhos'); 
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement('li');
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

function adicionarDesenho() {
    const inputElemento = document.getElementById('novo-desenho');
    const novoDesenho = inputElemento.value.trim(); 
    
    // 5. Verificação da condição com valor do input corrigido
    if (novoDesenho !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Substitui o elemento no índice atual
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista(); // Atualiza a exibição da lista
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega
exibirLista(); 
