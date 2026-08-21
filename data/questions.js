export const questions = () => {
    const quizQuestions = [
        // NÍVEL FÁCIL
        {
            id: 1,
            level: "Nível Fácil",
            question: 'Qual é a principal função do COBRADE?',
            options: [
                { id: 'a', text: 'Prever o clima', correct: false },
                { id: 'b', text: 'Classificar desastres', correct: true },
                { id: 'c', text: 'Construir abrigos', correct: false },
                { id: 'd', text: 'Treinar agentes', correct: false },
            ],
        },
        {
            id: 2,
            level: "Nível Fácil",
            question: 'As enchentes são classificadas em qual tipo de desastre?',
            options: [
                { id: 'a', text: 'Tecnológicos', correct: false },
                { id: 'b', text: 'Biológicos', correct: false },
                { id: 'c', text: 'Hidrológicos', correct: true },
                { id: 'd', text: 'Geológicos', correct: false },
            ],
        },
        {
            id: 3,
            level: "Nível Fácil",
            question: 'Em sua atuação pública, quem o agente de proteção representa?',
            options: [
                { id: 'a', text: 'A si mesmo', correct: false },
                { id: 'b', text: 'A imprensa', correct: false },
                { id: 'c', text: 'O poder público', correct: true },
                { id: 'd', text: 'A comunidade', correct: false },
            ],
        },
        {
            id: 4,
            level: "Nível Fácil",
            question: 'Qual é a prioridade máxima nas ações da Defesa Civil?',
            options: [
                { id: 'a', text: 'Bens', correct: false },
                { id: 'b', text: 'Vidas', correct: true },
                { id: 'c', text: 'Conflitos', correct: false },
                { id: 'd', text: 'Trabalho', correct: false },
            ],
        },
        {
            id: 5,
            level: "Nível Fácil",
            question: 'Qual deve ser a postura adequada do agente no atendimento?',
            options: [
                { id: 'a', text: 'Parcial', correct: false },
                { id: 'b', text: 'Técnica', correct: true },
                { id: 'c', text: 'Informal', correct: false },
                { id: 'd', text: 'Opinativa', correct: false },
            ],
        },

        // NÍVEL MÉDIO
        {
            id: 6,
            level: "Nível Médio",
            question: 'O incêndio urbano é classificado como um desastre de qual tipo?',
            options: [
                { id: 'a', text: 'Natural', correct: false },
                { id: 'b', text: 'Geológico', correct: false },
                { id: 'c', text: 'Tecnológico', correct: true },
                { id: 'd', text: 'Climático', correct: false },
            ],
        },
        {
            id: 7,
            level: "Nível Médio",
            question: 'Qual das atitudes abaixo NÃO faz parte de uma rotina preventiva?',
            options: [
                { id: 'a', text: 'Monitoramento', correct: false },
                { id: 'b', text: 'Vistorias', correct: false },
                { id: 'c', text: 'Esperar o desastre', correct: true },
                { id: 'd', text: 'Cadastro', correct: false },
            ],
        },
        {
            id: 8,
            level: "Nível Médio",
            question: 'Qual é a primeira ação que o agente deve tomar no atendimento?',
            options: [
                { id: 'a', text: 'Tirar foto', correct: false },
                { id: 'b', text: 'Identificar-se', correct: true },
                { id: 'c', text: 'Classificar o risco', correct: false },
                { id: 'd', text: 'Fazer o relatório', correct: false },
            ],
        },
        {
            id: 9,
            level: "Nível Médio",
            question: 'Qual é a conduta imediata diante de um risco iminente?',
            options: [
                { id: 'a', text: 'Esperar a situação piorar', correct: false },
                { id: 'b', text: 'Isolar a área', correct: true },
                { id: 'c', text: 'Ignorar o aviso', correct: false },
                { id: 'd', text: 'Apenas registrar a ocorrência', correct: false },
            ],
        },
        {
            id: 10,
            level: "Nível Médio",
            question: 'A retirada preventiva de moradores da área de risco é uma medida de:',
            options: [
                { id: 'a', text: 'Exagero', correct: false },
                { id: 'b', text: 'Ação opcional', correct: false },
                { id: 'c', text: 'Proteção', correct: true },
                { id: 'd', text: 'Medida evitável', correct: false },
            ],
        },
        {
            id: 11,
            level: "Nível Médio",
            question: 'A resistência em sair de casa em situações de risco costuma estar ligada ao:',
            options: [
                { id: 'a', text: 'Sentimento de segurança', correct: false },
                { id: 'b', text: 'Fato de não haver risco', correct: false },
                { id: 'c', text: 'Apego ao patrimônio', correct: true },
                { id: 'd', text: 'Excesso de informação', correct: false },
            ],
        },
        {
            id: 12,
            level: "Nível Médio",
            question: 'Qual é a abordagem correta ao orientar moradores resistentes?',
            options: [
                { id: 'a', text: 'Entrar em confronto', correct: false },
                { id: 'b', text: 'Ignorar o morador', correct: false },
                { id: 'c', text: 'Dialogar', correct: true },
                { id: 'd', text: 'Forçar sem explicação', correct: false },
            ],
        },
        {
            id: 13,
            level: "Nível Médio",
            question: 'O documento elaborado pela equipe técnica deve ter caráter:',
            options: [
                { id: 'a', text: 'Subjetivo', correct: false },
                { id: 'b', text: 'Informal', correct: false },
                { id: 'c', text: 'Técnico', correct: true },
                { id: 'd', text: 'Opinativo', correct: false },
            ],
        },
        {
            id: 14,
            level: "Nível Médio",
            question: 'Qual elemento serve como evidência concreta em um relatório?',
            options: [
                { id: 'a', text: 'Opinião pessoal', correct: false },
                { id: 'b', text: 'Suposição', correct: false },
                { id: 'c', text: 'Foto', correct: true },
                { id: 'd', text: 'Achismo', correct: false },
            ],
        },
        {
            id: 15,
            level: "Nível Médio",
            question: 'A gestão essencial na organização dos abrigos envolve o:',
            options: [
                { id: 'a', text: 'Trabalho de decoração', correct: false },
                { id: 'b', text: 'Registro das famílias', correct: true },
                { id: 'c', text: 'Entretenimento diário', correct: false },
                { id: 'd', text: 'Fornecimento de internet', correct: false },
            ],
        },

        // NÍVEL DIFÍCIL
        {
            id: 16,
            level: "Nível Difícil",
            question: 'Qual é o código do COBRADE para Terremoto?',
            options: [
                { id: 'a', text: '1.1.1.1.0', correct: false },
                { id: 'b', text: '1.1.1.2.0', correct: false },
                { id: 'c', text: '1.1.1.1.0', correct: true },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
        },
        {
            id: 17,
            level: "Nível Difícil",
            question: 'Qual é o código do COBRADE para Erosão Costeira / Marinha?',
            options: [
                { id: 'a', text: '1.1.1.1.0', correct: false },
                { id: 'b', text: '1.1.4.1.0', correct: true },
                { id: 'c', text: '1.1.3.4.0', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
        },
        {
            id: 18,
            level: "Nível Difícil",
            question: 'Qual é o código do COBRADE para Ventos Costeiros (mobilidade de dunas)?',
            options: [
                { id: 'a', text: '1.3.1.1.1', correct: true },
                { id: 'b', text: '1.3.1.1.2', correct: false },
                { id: 'c', text: '1.3.2.1.1', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
        },
        {
            id: 19,
            level: "Nível Difícil",
            question: 'Qual é o código do COBRADE para Friagem?',
            options: [
                { id: 'a', text: '1.3.3.2.1', correct: true },
                { id: 'b', text: '1.4.1.3.1', correct: false },
                { id: 'c', text: '1.4.2.1.1', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
        },
        {
            id: 20,
            level: "Nível Difícil",
            question: 'Qual é o código do COBRADE para Queda de satélite (radionuclídeos)?',
            options: [
                { id: 'a', text: '2.1.1.1.0', correct: true },
                { id: 'b', text: '2.1.2.1.0', correct: false },
                { id: 'c', text: '2.1.3.1.0', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
        },
    ]
    return { quizQuestions }
}