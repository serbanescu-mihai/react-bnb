import React from "react";

const FilmareDrona = () => {
  return (
    <section className="filmare-drona section-wrapper">
      <header className="section-header">
        <h2>Filmare Drona</h2>
      </header>
      <section className="section-container">
        <iframe
          className="video"
          width="auto"
          height="auto"
          src="https://www.youtube-nocookie.com/embed/9BZNxCBJQh4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </section>
    </section>
  );
};

export default FilmareDrona;
