const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Gta SA é um bom jogo?",
        alternativas: [
            {
                texto: "Sim, com certeza",
                afirmacao: "Pois ele é um jogo que envolve gangues e policia",
            },

            {

                texto: "não",
                afirmação: "É muito violento",
            },
        ]
    },

    {
        enunciado: "Você conhece Carl Jhonson?",
        alternativas: [
            {
                texto: "Não e nem quero!",
                afirmacao: "Ele faz parte de uma guangue",
            },

            {
                texto: "Sim, ele parece ser daora.",
                afirmacao: "Ele é zika demais",
            },
        ]
    },

    {
        enunciado: "Você conhece a historia de GTA SA?",
        alternativas: [
            {
                texto: "Sim, é uma historia espetacular.",
                afirmacao: "Concordo, é uma historia fascinante.",
            },

            {
                texto: "Não, acho que é muito violento",
                afirmacao: "Sim, as vezes pode trazer problemas familiares",
            },
        ]
    }
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = pergunta_atual.enunciado;
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "No GTA";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
