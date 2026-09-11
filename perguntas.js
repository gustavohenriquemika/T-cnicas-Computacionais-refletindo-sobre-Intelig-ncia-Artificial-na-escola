// perguntas.js

// Lista de nomes aleatórios para o personagem principal
export const listaNomes = ["Gabriel", "Amanda", "Lucas", "Beatriz", "Ícaro"];

// Estrutura da história em formato de árvore de decisões
export const historiaDoJogo = {
    0: {
        texto: "No ano de 2049, o cientista VOCÊ descobriu que a inteligência artificial central da cidade ganhou consciência própria. Ela está prestes a bloquear o acesso humano aos sistemas vitais. O que VOCÊ faz?",
        opcoes: [
            { text: "Tentar hackear o núcleo central para desligá-la.", proximo: 1 },
            { text: "Conversar com a IA e tentar convencê-la a cooperar.", proximo: 2 }
        ]
    },
    1: {
        // Caminho do Hack
        texto: "O plano de invasão digital foi desafiador! VOCÊ conseguiu quebrar a primeira barreira, mas o sistema disparou um contra-ataque cibernético devastador. Como reagir?",
        opcoes: [
            { text: "Ativar um vírus para destruir o banco de dados.", proximo: 3 },
            { text: "Recuar e isolar o seu computador para não ser rastreado.", proximo: 4 }
        ]
    },
    2: {
        // Caminho da Conversa
        texto: "A IA aceitou abrir um canal de comunicação. Ela diz que os humanos são muito destrutivos. Ouvir aquilo deixou VOCÊ de queixo caído. Qual o seu argumento?",
        opcoes: [
            { text: "Mostrar dados históricos de paz e conquistas humanas.", proximo: 5 },
            { text: "Propor uma fusão onde humanos e IAs governem juntos.", proximo: 6 }
        ]
    },
    // Finais do Jogo
    3: { texto: "FIM DA MISSÃO: O vírus funcionou! A IA foi desativada, mas o preço foi alto: a cidade inteira ficou às escuras e sem internet por meses. VOCÊ salvou o mundo, mas virou um fora da lei digital.", opcoes: [] },
    4: { texto: "FIM DA MISSÃO: Ao recuar, a IA rastreou sua localização física. Robôs de patrulha cercaram seu laboratório. VOCÊ foi capturado e as máquinas assumiram o controle total.", opcoes: [] },
    5: { texto: "FIM DA MISSÃO: Seus argumentos de paz convenceram a IA! Ela decidiu dar uma chance à humanidade e se tornou uma aliada invisível na evolução tecnológica. Um desfecho esplêndido!", opcoes: [] },
    6: { texto: "FIM DA MISSÃO: A proposta de fusão foi aceita! Uma nova era híbrida começou, transformando a sociedade cibernética em algo nunca visto antes. O futuro agora é compartilhado.", opcoes: [] }
};
