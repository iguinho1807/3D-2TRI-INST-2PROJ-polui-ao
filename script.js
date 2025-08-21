const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Qual a principal causa da poluição do ar nas grandes cidades?",
        alternativas: [
            {
                texto:"a",
                afirmação: "Emissões de gases poluentes por veículos automotores"
            },
            {
                texto: "b",
                afirmação: "Queimadas em florestas nas áreas rurais"
            }
        ]
    },
    {
        enunciado: "2 - Qual o impacto mais imediato do descarte inadequado de lixo plástico em ambientes aquáticos?",
        alternativas: [
            {
                texto:"a",
                afirmação: "Contaminação da água potável e do solo"
            },
            {
                texto: "b",
                afirmação: "Danos a vida marinha e costeira, como o enforcamento de animais"
            }
        ]
    },
    {
        enunciado: "3 - Qual a diferença entre poluição sonora e polução visual?",
        alternativas: [
            {
                texto:"a",
                afirmação: "A poluição sonora é causada por ruídos excessivos, enquanto a poluição visual é gerada pelo acumulo de elementos que desorganizama paisagem"
            },
            {
                texto: "b",
                afirmação: "A poluição sonora afeta a audição, e a polução visual impacta no sistema respiratório"
            }
        ]
    },
    {
        enunciado: "4 - Quai medida pode ser mais eficaz para reduzir a poluição do solo em áreas agrícolas",
        alternativas: [
            {
                texto:"a",
                afirmação: "Uso intensivo de produtos de fertilizantes químicos"
            },
            {
                texto: "b",
                afirmação: "Adoção de práticas de agricultura sustentávelcomo rotação de culturas e no uso de adubos orgânicos."
            }
        ]
    },
    {
        enunciado: "5 - De que forma a polução luminosa afeta o meio ambiente?",
        alternativas: [
            {
                texto:"a",                
                afirmação: "Aumenta a visibilidade noturna, facilitando a locomoção."
            },
            {
                texto: "b",
                afirmação: "Altera o ciclo de vida de animais noturnos e dificulta a desvenção astronômica."
            }
        ]
    }, 
    {
        enunciado: "6 - Qual a principal responsabilidade do cidadão comum na luta contra a poluição?",
        alternativas: [
            {
                texto:"a",
                afirmação: "Esperar por ações governamentais e empresariais para resolução dos problemas"
            },
            {
                texto: "b",
                afirmação: "Adotas hábitos de consumo concsiente, práticar a reciclagem e economizar recursos naturais"
            }
        ]
    },
]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
