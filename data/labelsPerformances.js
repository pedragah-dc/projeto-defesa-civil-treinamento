import iconDesempenhoBaixo from '../src/assets/images/icons/icon-desempenho-baixo.png';
import iconDesempenhoMedio from '../src/assets/images/icons/icon-desempenho-mediano.png';
import iconDesempenhoAlto from '../src/assets/images/icons/icon-desempenho-alto.png';

export const performanceLabels = [
    {
        min: 0,
        max: 10,
        title: 'Treinamento finalizado',
        label: 'Hora de Revisar',
        color: "#c51818",
        icon: iconDesempenhoBaixo,
        description: 'Alguns conceitos importantes ainda precisam ser reforçados. Revise as respostas e tente novamente.'
    },
    {
        min: 10,
        max: 50,
        title: 'Você concluiu esta etapa!',
        subtitle: 'Seu esforço já faz a diferença.',
        label: 'Bom Caminho!',
        color: "#D5CF2E",
        icon: iconDesempenhoMedio,
        description: 'Você já domina parte do conteúdo. Revise os pontos de dúvida para fortalecer sua atuação em campo.'
    },
    {
        min: 50,
        max: 100,
        title: 'Parabéns, agente!',
        subtitle: 'Você concluiu o treinamento com sucesso.', 
        label: 'Excelente',
        color: "#1AD549",
        icon: iconDesempenhoAlto,
        description: 'Você está cada vez mais preparado para proteger e agir com excelência!'
    }
];


export const getPerformanceLabel = (performance) => {
    const item = performanceLabels.find(
        (item) => performance > item.min && performance <= item.max
    );

    return item;
};


export default getPerformanceLabel;