import React from "react";

const Facilitati = () => {
  return (
    <section className="facilitati section-wrapper" id="facilitati">
      <header className="section-header">
        <h2>Facilitati Pensiunea Aron</h2>
      </header>
      <section className="section-container">
        <article>
          <h3>
            <strong>PENSIUNEA ARON I</strong>
            <br />3 MARGARETE
          </h3>
          <p>
            <b>Dotari:</b>
          </p>
          <p>
            <b>7 camere twin</b> - cu balcon, grup sanitar propriu, televizor
          </p>
          <p>
            <b>2 apartamente</b> - cu balcon, grup sanitar propriu, televizor
          </p>
          <p>
            <b>Sauna</b>
          </p>
        </article>
        <article>
          <h3>
            <strong>PENSIUNEA ARON II</strong>
            <br />4 MARGARETE
          </h3>
          <p>
            <b>Dotari:</b>
          </p>
          <p>
            <b>10 camere twin</b> cu balcon, grup sanitar propriu, televizor
          </p>
          <p>
            <b>5 camere cu pat matrimonial</b> - cu balcon, grup sanitar
            propriu, televizor
          </p>
          <p>
            <b>Sala de conferinte</b> - 30 de locuri
          </p>
        </article>
      </section>
      <section className="images-container">
        <img src="./images/pensiunea-aron-aproape.png" alt="" />
        <img src="./images/pensiunea-aron-balcon.png" alt="" />
        <img src="./images/pensiunea-aron-foisor.png" alt="" />
      </section>
    </section>
  );
};

export default Facilitati;
