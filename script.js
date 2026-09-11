// script.js
import { listaNomes, historiaDoJogo } from './perguntas.js';

// Puxando elementos do HTML
const telaInicial = document.getElementById("tela-inicial");
const caixaQuiz = document.getElementById("caixa-quiz");
const botaoEntrar = document.getElementById("botao-entrar");
const textoHistoria = document.getElementById("texto-historia");
const caixaBotoes = document.getElementById("caixa-botoes");
const botaoReiniciar = document.getElementById("botao-reiniciar");

// Variáveis de controle do jogo
let nomePersonagem = "";
let estadoAtual = 0;

// FUNÇÃO 1: Sorteia um elemento usando Math.floor e Math.random
function sortearNome(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

// FUNÇÃO 2: Mostra a etapa atual da história na tela
function renderizarEtapa() {
    const etapa = historiaDoJogo[estadoAtual];
    
    // Aplica o método .replace() para trocar "VOCÊ" pelo nome sorteado de forma personalizada
    let textoFormatado = etapa.texto.replace(/VOCÊ/g, nomePersonagem);
    textoHistoria.textContent = textoFormatado;
    
    // Limpa os botões antigos da tela
    caixaBotoes.innerHTML = "";

    // Verifica se chegou ao final da história (quando não há mais opções de escolha)
    if (etapa.opcoes.length === 0) {
        botaoReiniciar.classList.remove("escondido"); // Mostra botão jogar novamente
        return;
    }

    // Cria os botões de escolha dinamicamente para o jogador interagir
    etapa.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.text;
        botao.classList.add("botao-cyber");
        
        // Escutador de clique para avançar na história
        botao.addEventListener("click", () => {
            estadoAtual = opcao.proximo;
            renderizarEtapa();
        });
        
        caixaBotoes.appendChild(botao);
    });
}

// FUNÇÃO 3: Inicia o jogo pela primeira vez ao clicar na tela inicial
function iniciarJogo() {
    nomePersonagem = sortearNome(listaNomes); // Escolhe o nome do personagem
    estadoAtual = 0; // Garante que começa no início
    
    telaInicial.classList.add("escondido"); // Esconde a abertura
    caixaQuiz.classList.remove("escondido"); // Mostra o jogo
    botaoReiniciar.classList.add("escondido"); // Garante que o botão reiniciar comece oculto
    
    renderizarEtapa();
}

// FUNÇÃO 4: Reinicia o fluxo do jogo (Zera as variáveis e sorteia novo nome)
function reiniciarJogo() {
    estadoAtual = 0;
    nomePersonagem = sortearNome(listaNomes); // Novo sorteio para a próxima jogada!
    botaoReiniciar.classList.add("escondido");
    renderizarEtapa();
}

// Eventos de clique principais
botaoEntrar.addEventListener("click", iniciarJogo);
botaoReiniciar.addEventListener("click", reiniciarJogo);
