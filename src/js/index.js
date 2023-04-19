const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

const botao1 = document.getElementById('botao1');
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        console.log(imagens);
        imagens[indice].classList.add('ativa');
    }) 
})