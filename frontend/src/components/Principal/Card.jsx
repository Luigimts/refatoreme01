import'./Card.css';

function Card({ titulo }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Descrição do serviço oferecido.</p>
    </div>
  )
}

export default Card