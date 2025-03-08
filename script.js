// Obtendo o botão
const changeColorBtn = document.getElementById('changeColorBtn');

// Função para mudar a cor de fundo
function changeBackgroundColor() {
    // Gerando uma cor aleatória em formato hexadecimal
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

// Adicionando o evento de clique ao botão
changeColorBtn.addEventListener('click', changeBackgroundColor);
