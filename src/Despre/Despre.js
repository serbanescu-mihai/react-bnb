import React from "react";
import pensiuneaAronSemnStrada from "../images/pensiunea-aron-semn-strada.jpg";

const Despre = () => {
  return (
    <section className="despre section-wrapper" id="despre">
      <header className="section-header">
        <h2>Despre noi</h2>
        <p>Locul ideal pentru relaxare cu cei dragi!</p>
        <p>Locul preferat pentru distractii cu prietenii!</p>
        <p>Locul recomandat pentru intalniri de firma!</p>
      </header>
      <section className="section-container">
        <article>
          <h3>Cel mai bun loc pentru relaxare sau distractie!</h3>
          <p>
            Pensiunea Aron I cu 3 margarete si Pensiunea Aron II cu 4 margarete
            va ofera conditii excelente de cazare in Bran, la un raport pret
            calitate foarte bun. Situate la 100 de metri de la intrarea in Bran
            dinspre Brasov, pensiunile au o buna pozitionare fata de obiectivele
            turistice din Bran.
          </p>
          <p>
            Aici va puteti bucura de liniste si de o priveliste minunata,
            intr-un cadru natural deosebit. De la etajele superioare ale
            pensiunilor puteti admira Castelul Bran.
          </p>
          <p>
            Am avut in vedere sa cream tot ce este necesar pentru confortul
            dumneavoastra si un sejur reusit! Camerele au balcon si sunt dotate
            cu baie proprie si televizor. Pentru cei mici am pregatit loc de
            joaca amenajat in curte.
          </p>
          <p>
            Pensiunea Aron II dispune de o sala de conferinte de 30 de locuri
            pentru organizarea de evenimente de firma, traininguri si conferinte
            si la solicitare va putem pune la dispozitie programe de
            team-building si traineri.
          </p>
          <p>Pentru mai multe detalii asteptam sa ne contactati!</p>
        </article>
        <article>
          <img src={pensiuneaAronSemnStrada} alt="Pensiunea Aron Semn Strada" />
        </article>
      </section>
    </section>
  );
};

export default Despre;
