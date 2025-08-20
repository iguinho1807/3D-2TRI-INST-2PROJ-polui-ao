const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a principal causa da puluição do ar nas grandes cidades?",
        alternativas: [
            {
                texto: "a:",
                afirmacao: "Emissões de gases poluentes por veículos automotores"
            },
            {
                texto: "b:",
                afirmacao: "Queimadas em florestas nas áreas rurais"
            }
        ]
    },
    {
        enunciado: "Qual o impacto mais imediato do descarte inadequado de lixo plático em ambiente aquático",
        alternativas: [
            {
                texto: "a:",
                afirmacao: "Contaminação da água potável e do solo"
            },
            {
                texto: "b:",
                afirmacao: "Danos a vida marinha e costeira, como o enforcamento de animais"
            }
        ]
    },
    {
        enunciado: "Qual a diferença entre a poluição sonora e visual",
        alternativas: [
            {
                texto: "a:",
                afirmacao: "a poluição sonora é causada por ruídos excessivos, enquanto a poluição"
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
];


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
