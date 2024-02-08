const perguntas = [
    {
        pergunta: "Qual é uma das principais diferenças entre a anatomia de um recém-nascido e a de um adulto?",
        respostas: [
            "Os recém-nascidos têm órgãos internos menores que os adultos.",
            "Os recém-nascidos têm um sistema nervoso mais desenvolvido que os adultos.",
            "Os recém-nascidos têm um sistema imunológico mais forte que os adultos."
        ],
        correta: 0
    },
    {
        pergunta: "Qual das seguintes afirmações é verdadeira sobre a administração de medicamentos a crianças?",
        respostas: [
            "A dosagem de medicamentos para crianças é geralmente maior do que para adultos.",
            "As crianças têm maior capacidade de metabolizar medicamentos em comparação com adultos.",
            "A dosagem de medicamentos para crianças é geralmente menor do que para adultos."
        ],
        correta: 2
    },
    {
        pergunta: "Quais são os sinais de desidratação em lactentes e crianças pequenas?",
        respostas: [
            "Lábios secos, lágrimas ausentes, e pouca urina.",
            "Febre alta e pele úmida.",
            "Dor abdominal e respiração rápida."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é uma complicação potencial da administração de antibióticos a crianças?",
        respostas: [
            "Desenvolvimento de resistência bacteriana.",
            "Diminuição do risco de infecções secundárias.",
            "Melhoria da flora intestinal."
        ],
        correta: 0
    },
    {
        pergunta: "Quando é mais comum o desenvolvimento do reflexo de Moro em lactentes?",
        respostas: [
            "Ao nascer.",
            "Aos 6 meses de idade.",
            "Aos 2 anos de idade."
        ],
        correta: 1
    },
    {
        pergunta: "O que é a fontanela anterior em um recém-nascido?",
        respostas: [
            "Uma estrutura óssea que não está presente em recém-nascidos.",
            "Uma abertura membranosa na parte de trás da cabeça.",
            "Uma abertura membranosa na parte frontal do crânio."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é uma das principais diferenças na resposta imunológica entre crianças e adultos?",
        respostas: [
            "As crianças têm um sistema imunológico menos eficaz do que os adultos.",
            "As crianças têm um sistema imunológico mais maduro do que os adultos.",
            "As crianças têm um sistema imunológico mais rápido para responder a infecções do que os adultos."
        ],
        correta: 2
    },
    {
        pergunta: "O que é a fontanela posterior em um recém-nascido?",
        respostas: [
            "Uma abertura membranosa na parte frontal do crânio.",
            "Uma abertura membranosa na parte de trás da cabeça.",
            "Uma estrutura óssea que não está presente em recém-nascidos."
        ],
        correta: 1
    },
    {
        pergunta: "Quando o reflexo de sucção está presente em lactentes?",
        respostas: [
            "Ao nascer.",
            "Aos 3 meses de idade.",
            "Aos 12 meses de idade."
        ],
        correta: 0
    },
    {
        pergunta: "Quais são os sinais de uma obstrução das vias aéreas em crianças?",
        respostas: [
            "Tosse persistente e espirros frequentes.",
            "Respiração difícil, estridor e cianose.",
            "Olhos lacrimejantes e nariz escorrendo."
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
 
 
    quizItem.querySelector('dl').appendChild(dt);
}

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}