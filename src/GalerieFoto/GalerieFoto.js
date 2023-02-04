import React, { useState } from "react";
import { images } from "../data";

const GalerieFoto = () => {
  const [count, setCount] = useState(1);

  return (
    <section className="galerie section-wrapper" id="galerie">
      <header className="section-header">
        <h2>Galerie foto</h2>
      </header>
      <section className="section-container" data-carousel>
        <article className="button-container">
          <button
            className="slider-button previous-button"
            data-carousel-button="prev"
            onClick={() => {
              if (count < 2) {
                setCount(images.length);
              } else {
                setCount(count - 1);
              }
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="slider-button next-button"
            data-carousel-button="'next"
            onClick={() => {
              if (count > images.length - 1) {
                setCount(1);
              } else {
                setCount(count + 1);
              }
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </article>

        <article className="image-carousel">
          <div data-slides>
            {images.map((image) => {
              console.log(image.url);
              if (count === image.id) {
                return (
                  <img
                    data-active
                    key={image.id}
                    src={image.url}
                    className="slide"
                    data-id={image.id}
                  />
                );
              }
            })}
          </div>
        </article>
      </section>
    </section>
  );
};

export default GalerieFoto;
