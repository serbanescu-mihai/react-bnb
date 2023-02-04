import React from "react";
import pensiuneaAronAproape from "../images/pensiunea-aron-aproape.png";
import pensiuneaAronBalcon from "../images/pensiunea-aron-balcon.png";
import pensiuneaAronFoisor from "../images/pensiunea-aron-foisor.png";

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
        <img src={pensiuneaAronAproape} alt="Pensiunea Aron Aproape" />
        <img src={pensiuneaAronBalcon} alt="Pensiunea Aron Balcon" />
        <img src={pensiuneaAronFoisor} alt="Pensiunea Aron Foisor" />
      </section>
    </section>
  );
};

export default Facilitati;
