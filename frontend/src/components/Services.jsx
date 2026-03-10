import Card from "./Principal/Card"

const servicos = [
  {
    titulo: "UI/UX Design",
    descricao: "Criação de interfaces intuitivas"
  },
  {
    titulo: "Infraestrutura AWS",
    descricao: "Arquitetura de sistemas escaláveis"
  },
  {
    titulo: "IA & Game Dev",
    descricao: "Desenvolvimento com Inteligência Artificial"
  },
  {
    titulo: "Engenharia de Dados",
    descricao: "Estruturação e análise de dados"
  }
]

function Services() {
  return (
    <section>

      <h2>Nossas Especialidades</h2>

     {servicos.map((servico, index) => (
  <Card
    key={index}
    titulo={servico.titulo}
    descricao={servico.descricao}
  />
))}

    </section>
  )
}

export default Services