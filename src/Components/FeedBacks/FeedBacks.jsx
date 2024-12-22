import React from "react";
import Slider from "react-slick";

const FeedbackCarousel = () => {
  const settings = {
    dots: true, // Mostra indicadores abaixo
    infinite: true, // Ativa o loop
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides por scroll
    autoplay: true, // Ativa autoplay
    autoplaySpeed: 3000, // Intervalo entre slides
    pauseOnHover: true, // Pausa ao passar o mouse
  };

  const feedbacks = [
    {
      name: "Maria",
      comment: "Adorei o serviço, muito eficiente!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "João",
      comment: "Equipe muito atenciosa e profissional!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ana",
      comment: "Recomendo para todos! Ótima experiência.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <h2>O que nossos clientes dizem</h2>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} style={{ padding: "20px" }}>
            <img
              src={feedback.image}
              alt={feedback.name}
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                marginBottom: "10px",
              }}
            />
            <h3>{feedback.name}</h3>
            <p>{feedback.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
