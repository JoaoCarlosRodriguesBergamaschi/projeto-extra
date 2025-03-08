// Selecionando o botão de mudança de cor
const changeColorBtn = document.getElementById('changeColorBtn');

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para alterar a cor de fundo do body
function mudarCorDeFundo() {
    // Definindo uma nova cor de fundo gerada aleatoriamente
    document.body.style.backgroundColor = gerarCorAleatoria();
    
    // Feedback visual para o botão após o clique
    changeColorBtn.innerText = 'Cor Alterada!';
    changeColorBtn.disabled = true; // Desabilita o botão enquanto a ação é executada
    
    // Reativa o botão após 1 segundo para dar tempo do feedback ser visível
    setTimeout(() => {
        changeColorBtn.innerText = 'Mudar Cor de Fundo';
        changeColorBtn.disabled = false;
    }, 1000);
}

// Adicionando o ouvinte de evento para o clique do botão
changeColorBtn.addEventListener('click', mudarCorDeFundo);

// Garantir que a função só seja executada quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site carregado com sucesso!");
    // Qualquer outro código que precise ser executado após o carregamento pode ir aqui
});
