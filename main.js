const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
    pergunta1{
        enunciado: "Você gosta de bolo?",
        alternativas: [
            {
                texto: "Alternativa A",
                afirmacao: "Você é uma pessoa normal"
            },
            {
                texto: "Alternativa B",
                afirmacao: "Você é chato hein bot"
            }]
    },
    pergunta2{


    }
]


function mostraPergunta(){
    if (atual >= perguntas.lenght) {
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}