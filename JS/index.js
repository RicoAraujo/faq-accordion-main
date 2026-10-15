// Seu desafio é construir este formulário de perguntas frequentes em formato de acordeão, deixando-o o mais parecido possível com o design original.

// Você pode usar qualquer ferramenta que desejar para ajudá-lo a concluir o desafio. Portanto, se tiver algo que gostaria de praticar, fique à vontade para tentar.

// Seus usuários devem ser capazes de:

// Ocultar/Exibir a resposta de uma pergunta quando a pergunta for clicada.
// Navegue pelas perguntas e oculte/exiba as respostas usando apenas a navegação por teclado.
// Veja o layout ideal da interface de acordo com o tamanho da tela do seu dispositivo.
// Veja os estados de foco e de passar o cursor para todos os elementos interativos na página.

const questions = document.querySelectorAll('.question');


// console.log(questions);
questions.forEach((question) => {
    question.addEventListener('click', () => {

        question.querySelector('.answer').classList.toggle('showAnswer',);
        question.querySelector('.minusIcon').classList.toggle('showAnswer');


        if (question.querySelector('.answer').classList.contains('showAnswer')) {
            question.classList.add('openAnswer');
        } else {
            question.classList.remove('openAnswer');
        }

    });
});

questions.forEach((question) => {
    question.addEventListener('click', () => {
        questions.forEach((otherQuestion) => { //criamos o loop otherQuestion para percorrer todas as perguntas e fechar as outras respostas quando uma pergunta for clicada
            if (otherQuestion !== question) {
                otherQuestion.querySelector('.answer').classList.remove('showAnswer');
                otherQuestion.querySelector('.minusIcon').classList.remove('showAnswer');
                otherQuestion.classList.remove('openAnswer');
            }
        })
    });
    
});

