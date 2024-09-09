import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  // Flickity options
  initialIndex: 2,
  wrapAround: true,
  pageDots: false, // To enable dots
  prevNextButtons: true, // To enable arrows
  autoPlay: true,
};
const Slideshow: React.FC = () => {
  return (
    <div className="w-screen h-[80vh] mx-auto">
      <Flickity
        className="carousel" // Optional, if you want to add a custom class
        elementType="div" // Default is 'div'
        options={flickityOptions}
      >
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Bj60-IMG22.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Baic-BJ40-IMG22-1.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/07/BJ60-IMGH1-scaled.jpg"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Baic-BJ40-IMG20-1.jpg"
            alt="Slide 4"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Baic-BJ40-IMG21-1.jpg"
            alt="Slide 5"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Baic-X35-IMG25.jpg"
            alt="Slide 6"
          />
        </div>
        <div className="carousel-cell">
          <img
            className="w-full h-[80vh] object-cover"
            src="https://baic.sa/wp-content/uploads/2024/09/Baic-X35-IMG26.jpg"
            alt="Slide 7"
          />
        </div>
      </Flickity>
    </div>
  );
};

export default Slideshow;
