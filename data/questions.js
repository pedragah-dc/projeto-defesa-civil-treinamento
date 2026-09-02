import terremoto from '../src/assets/images/placas/terremoto.png'
import erosao from '../src/assets/images/placas/erosao.png'
import ventosCosteiros from '../src/assets/images/placas/ventos_costeiros.png'
import friagem from '../src/assets/images/placas/friagem.png'
import satelite from '../src/assets/images/placas/satelites.png'

export const questions = () => {
    const quizQuestions = [
        // NÍVEL FÁCIL
        {
            id: 1,
            question: 'Qual é a principal função do COBRADE?',
            options: [
                { id: 'a', text: 'Prever o clima', correct: false },
                { id: 'b', text: 'Classificar desastres', correct: true },
                { id: 'c', text: 'Construir abrigos', correct: false },
                { id: 'd', text: 'Treinar agentes', correct: false },
            ],
            explanation: {
                correct: 'O COBRADE é um sistema de classificação e codificação de desastres.',
                incorrect: {
                    a: 'Previsão climática é função da meteorologia.',
                    c: 'Construção de abrigos é ação operacional.',
                    d: 'Treinamento é parte da capacitação, não do COBRADE.'
                }
            }
        },
        {
            id: 2,
            question: 'As enchentes são classificadas em qual tipo de desastre?',
            options: [
                { id: 'a', text: 'Tecnológicos', correct: false },
                { id: 'b', text: 'Biológicos', correct: false },
                { id: 'c', text: 'Hidrológicos', correct: true },
                { id: 'd', text: 'Geológicos', correct: false },
            ],
            explanation: {
                correct: 'Está ligada à água (hidrológico).',
                incorrect: {
                    a: 'Tecnológico envolve ação humana.',
                    b: 'Biológico envolve doenças.',
                    d: 'Geológico envolve solo/terra.'
                }
            }
        },
        {
            id: 3,
            question: 'Em sua atuação pública, quem o agente de proteção representa?',
            options: [
                { id: 'a', text: 'A si mesmo', correct: false },
                { id: 'b', text: 'A imprensa', correct: false },
                { id: 'c', text: 'O poder público', correct: true },
                { id: 'd', text: 'A comunidade', correct: false },
            ],
            explanation: {
                correct: 'O agente representa o Estado.',
                incorrect: {
                    a: 'A atuação não é pessoal.',
                    b: 'Não representa a mídia.',
                    d: 'Ele atende a comunidade, mas representa o poder público.'
                }
            }
        },
        {
            id: 4,
            question: 'Qual é a prioridade máxima nas ações da Defesa Civil?',
            options: [
                { id: 'a', text: 'Bens', correct: false },
                { id: 'b', text: 'Vidas', correct: true },
                { id: 'c', text: 'Conflitos', correct: false },
                { id: 'd', text: 'Trabalho', correct: false },
            ],
            explanation: {
                correct: 'É o princípio fundamental da defesa civil.',
                incorrect: {
                    a: 'Bens são secundários.',
                    c: 'Evitar conflito não é a prioridade máxima.',
                    d: 'Irrelevante frente à proteção da vida.'
                }
            }
        },
        {
            id: 5,
            question: 'Qual deve ser a postura adequada do agente no atendimento?',
            options: [
                { id: 'a', text: 'Parcial', correct: false },
                { id: 'b', text: 'Técnica', correct: true },
                { id: 'c', text: 'Informal', correct: false },
                { id: 'd', text: 'Opinativa', correct: false },
            ],
            explanation: {
                correct: 'Atuação baseada em conhecimento.',
                incorrect: {
                    a: 'Parcialidade é incorreta na atuação pública.',
                    c: 'A postura informal compromete a credibilidade.',
                    d: 'Deve ser técnica, não baseada em opinião.'
                }
            }
        },

        // NÍVEL MÉDIO
        {
            id: 6,
            question: 'O incêndio urbano é classificado como um desastre de qual tipo?',
            options: [
                { id: 'a', text: 'Natural', correct: false },
                { id: 'b', text: 'Geológico', correct: false },
                { id: 'c', text: 'Tecnológico', correct: true },
                { id: 'd', text: 'Climático', correct: false },
            ],
            explanation: {
                correct: 'Possui origem humana.',
                incorrect: {
                    a: 'Não é natural.',
                    b: 'Não envolve o solo.',
                    d: 'Não está associado ao clima.'
                }
            }
        },
        {
            id: 7,
            question: 'Qual das atitudes abaixo NÃO faz parte de uma rotina preventiva?',
            options: [
                { id: 'a', text: 'Monitoramento', correct: false },
                { id: 'b', text: 'Vistorias', correct: false },
                { id: 'c', text: 'Esperar o desastre', correct: true },
                { id: 'd', text: 'Cadastro', correct: false },
            ],
            explanation: {
                correct: 'A prevenção acontece ANTES do desastre, portanto esperar não é uma atitude preventiva.',
                incorrect: {
                    a: 'Monitoramento faz parte da rotina preventiva.',
                    b: 'Vistorias fazem parte da rotina preventiva.',
                    d: 'Cadastro de áreas/moradores faz parte da rotina preventiva.'
                }
            }
        },
        {
            id: 8,
            question: 'Qual é a primeira ação que o agente deve tomar no atendimento?',
            options: [
                { id: 'a', text: 'Tirar foto', correct: false },
                { id: 'b', text: 'Identificar-se', correct: true },
                { id: 'c', text: 'Classificar o risco', correct: false },
                { id: 'd', text: 'Fazer o relatório', correct: false },
            ],
            explanation: {
                correct: 'Trata-se de um protocolo institucional fundamental.',
                incorrect: {
                    a: 'Fotos são tiradas posteriormente.',
                    c: 'A classificação do risco exige análise prévia.',
                    d: 'O relatório é a etapa final.'
                }
            }
        },
        {
            id: 9,
            question: 'Qual é a conduta imediata diante de um risco iminente?',
            options: [
                { id: 'a', text: 'Esperar a situação piorar', correct: false },
                { id: 'b', text: 'Isolar a área', correct: true },
                { id: 'c', text: 'Ignorar o aviso', correct: false },
                { id: 'd', text: 'Apenas registrar a ocorrência', correct: false },
            ],
            explanation: {
                correct: 'Exige uma ação imediata para proteção.',
                incorrect: {
                    a: 'Qualquer atraso gera risco à vida.',
                    c: 'Ignorar configura negligência.',
                    d: 'O registro não resolve o risco imediato.'
                }
            }
        },
        {
            id: 10,
            question: 'A retirada preventiva de moradores da área de risco é uma medida de:',
            options: [
                { id: 'a', text: 'Exagero', correct: false },
                { id: 'b', text: 'Ação opcional', correct: false },
                { id: 'c', text: 'Proteção', correct: true },
                { id: 'd', text: 'Medida evitável', correct: false },
            ],
            explanation: {
                correct: 'Trata-se de uma ação que salva vidas.',
                incorrect: {
                    a: 'Não é exagero quando há risco.',
                    b: 'Não deve ser vista como puramente opcional.',
                    d: 'É uma medida necessária, não evitável.'
                }
            }
        },
        {
            id: 11,
            question: 'A resistência em sair de casa em situações de risco costuma estar ligada ao:',
            options: [
                { id: 'a', text: 'Sentimento de segurança', correct: false },
                { id: 'b', text: 'Fato de não haver risco', correct: false },
                { id: 'c', text: 'Apego ao patrimônio', correct: true },
                { id: 'd', text: 'Excesso de informação', correct: false },
            ],
            explanation: {
                correct: 'É o fator social principal que gera resistência.',
                incorrect: {
                    a: 'Não é um sentimento real de segurança.',
                    b: 'O risco existe na situação descrita.',
                    d: 'O excesso de informação não é a causa da resistência.'
                }
            }
        },
        {
            id: 12,
            question: 'Qual é a abordagem correta ao orientar moradores resistentes?',
            options: [
                { id: 'a', text: 'Entrar em confronto', correct: false },
                { id: 'b', text: 'Ignorar o morador', correct: false },
                { id: 'c', text: 'Dialogar', correct: true },
                { id: 'd', text: 'Forçar sem explicação', correct: false },
            ],
            explanation: {
                correct: 'Exige técnica alinhada com sensibilidade social.',
                incorrect: {
                    a: 'Confrontar agrava a resistência.',
                    b: 'Ignorar deixa o morador em risco.',
                    d: 'Forçar sem diálogo gera conflito.'
                }
            }
        },
        {
            id: 13,
            question: 'O documento elaborado pela equipe técnica deve ter caráter:',
            options: [
                { id: 'a', text: 'Subjetivo', correct: false },
                { id: 'b', text: 'Informal', correct: false },
                { id: 'c', text: 'Técnico', correct: true },
                { id: 'd', text: 'Opinativo', correct: false },
            ],
            explanation: {
                correct: 'Deve seguir o padrão institucional.',
                incorrect: {
                    a: 'Subjetividade compromete a análise.',
                    b: 'Informalidade tira a validade do documento.',
                    d: 'Não deve conter opiniões sem embasamento.'
                }
            }
        },
        {
            id: 14,
            question: 'Qual elemento serve como evidência concreta em um relatório?',
            options: [
                { id: 'a', text: 'Opinião pessoal', correct: false },
                { id: 'b', text: 'Suposição', correct: false },
                { id: 'c', text: 'Foto', correct: true },
                { id: 'd', text: 'Achismo', correct: false },
            ],
            explanation: {
                correct: 'Funciona como evidência visual direta.',
                incorrect: {
                    a: 'Opiniões não são evidências.',
                    b: 'Suposições não comprova fatos.',
                    d: 'Achismos descredibilizam o relatório.'
                }
            }
        },
        {
            id: 15,
            question: 'A gestão essencial na organização dos abrigos envolve o:',
            options: [
                { id: 'a', text: 'Trabalho de decoração', correct: false },
                { id: 'b', text: 'Registro das famílias', correct: true },
                { id: 'c', text: 'Entretenimento diário', correct: false },
                { id: 'd', text: 'Fornecimento de internet', correct: false },
            ],
            explanation: {
                correct: 'Essencial para o controle e organização dos abrigados.',
                incorrect: {
                    a: 'Decoração é irrelevante no atendimento emergencial.',
                    c: 'Entretenimento não é gestão essencial.',
                    d: 'Acesso à internet não é a prioridade de gestão inicial.'
                }
            }
        },

        // NÍVEL DIFÍCIL
        {
            id: 16,
            question: 'Qual é o código do COBRADE para Terremoto?',
            image: terremoto,
            options: [
                { id: 'a', text: '1.1.1.1.0', correct: false },
                { id: 'b', text: '1.1.1.2.0', correct: false },
                { id: 'c', text: '1.1.1.1.0', correct: true },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
            explanation: {
                correct: 'Numeração oficial do COBRADE para terremotos (1.1.1.1.0).',
                incorrect: {
                    a: 'Numeração incorreta segundo a tabela.',
                    b: 'Numeração incorreta segundo a tabela.',
                    d: 'Numeração incorreta segundo a tabela.'
                }
            }
        },
        {
            id: 17,
            question: 'Qual é o código do COBRADE para Erosão Costeira / Marinha?',
            image: erosao,
            options: [
                { id: 'a', text: '1.1.1.1.0', correct: false },
                { id: 'b', text: '1.1.4.1.0', correct: true },
                { id: 'c', text: '1.1.3.4.0', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
            explanation: {
                correct: 'Numeração oficial do COBRADE para erosão costeira (1.1.4.1.0).',
                incorrect: {
                    a: 'Numeração incorreta.',
                    c: 'Numeração incorreta.',
                    d: 'Numeração incorreta.'
                }
            }
        },
        {
            id: 18,
            question: 'Qual é o código do COBRADE para Ventos Costeiros (mobilidade de dunas)?',
            image: ventosCosteiros,
            options: [
                { id: 'a', text: '1.3.1.1.1', correct: true },
                { id: 'b', text: '1.3.1.1.2', correct: false },
                { id: 'c', text: '1.3.2.1.1', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
            explanation: {
                correct: 'Numeração oficial do COBRADE para ventos costeiros / dunas (1.3.1.1.1).',
                incorrect: {
                    b: 'Numeração incorreta.',
                    c: 'Numeração incorreta.',
                    d: 'Numeração incorreta.'
                }
            }
        },
        {
            id: 19,
            question: 'Qual é o código do COBRADE para Friagem?',
            image: friagem,
            options: [
                { id: 'a', text: '1.3.3.2.1', correct: true },
                { id: 'b', text: '1.4.1.3.1', correct: false },
                { id: 'c', text: '1.4.2.1.1', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
            explanation: {
                correct: 'Numeração oficial do COBRADE para friagem (1.3.3.2.1).',
                incorrect: {
                    b: 'Numeração incorreta.',
                    c: 'Numeração incorreta.',
                    d: 'Numeração incorreta.'
                }
            }
        },
        {
            id: 20,
            question: 'Qual é o código do COBRADE para Queda de satélite (radionuclídeos)?',
            image: satelite,
            options: [
                { id: 'a', text: '2.1.1.1.0', correct: true },
                { id: 'b', text: '2.1.2.1.0', correct: false },
                { id: 'c', text: '2.1.3.1.0', correct: false },
                { id: 'd', text: '1.1.2.0.0', correct: false },
            ],
            explanation: {
                correct: 'Numeração oficial do COBRADE para queda de satélite (2.1.1.1.0).',
                incorrect: {
                    b: 'Numeração incorreta.',
                    c: 'Numeração incorreta.',
                    d: 'Numeração incorreta.'
                }
            }
        },
    ]
    return { quizQuestions }
}