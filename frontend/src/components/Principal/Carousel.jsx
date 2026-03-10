import { useRef } from "react";
import Card from "./Card";
import "./Carousel.css";

function Carousel({ services }) {

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="carousel-wrapper">

      <button className="carousel-btn left" onClick={scrollLeft}>
        ◀
      </button>

      <div className="carousel-track" ref={carouselRef}>
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <button className="carousel-btn right" onClick={scrollRight}>
        ▶
      </button>

    </div>
  );
}

export default Carousel;