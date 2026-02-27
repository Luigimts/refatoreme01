// Array de dados simulando o retorno de uma API
// Excelente para exercitar a componentização com map() no React
const servicesData = [
    {
        id: 1,
        title: "UI/UX Design",
        description: "Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."
    },
    {
        id: 2,
        title: "Infraestrutura AWS",
        description: "Arquitetura, deploy e manutenção de soluções escaláveis na nuvem."
    },
    {
        id: 3,
        title: "IA & Game Dev",
        description: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."
    },
    {
        id: 4,
        title: "Engenharia de Dados",
        description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
    }
];

// Função imperativa para renderizar os cards no DOM
function renderCards() {
    const container = document.getElementById('cards-container');
    
    servicesData.forEach(service => {
        // Criando o elemento do card
        const card = document.createElement('div');
        card.className = 'card';
        
        // Injetando o conteúdo
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        // Adicionando ao container pai
        container.appendChild(card);
    });
}

// Interação simples de botão para refatorar para um onClick no React
document.getElementById('cta-btn').addEventListener('click', () => {
    alert('Aviso: Este site precisa ser refatorado para React.js!');
});

// Inicializa a renderização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderCards);