import Card from "./Card";

export default function Services() {
  return (
    <section className="cards-section">
      <h2>Nossas Especialidades</h2>

      <div className="cards-grid">
        <Card
          titulo="Desenvolvimento Web"
          descricao="Criamos aplicações modernas e escaláveis."
        />
        <Card
          titulo="Cloud Computing"
          descricao="Infraestrutura segura e eficiente na nuvem."
        />
        <Card
          titulo="UI/UX Design"
          descricao="Interfaces bonitas e intuitivas."
        />
      </div>
    </section>
  );
}