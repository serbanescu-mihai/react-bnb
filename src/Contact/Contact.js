import React from "react";

const Contact = () => {
  return (
    <section className="contact section-wrapper" id="contact">
      <header className="section-header">
        <h2>Contact</h2>
      </header>
      <section className="section-container">
        <article>
          <h3>Rezervari</h3>
          <p>
            Pentru rezervari sau informatii suplimentare va rugam folositi
            urmatoarele numere de telefon:
          </p>
          <a href="tel:+4 0744 309 987">+4 0744 309 987</a>
          <a href="tel:+4 0744 490 260">+4 0744 490 260</a>
        </article>
        <article>
          <iframe
            title="googlemaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1175903551216!2d25.368379015799093!3d45.52783917910173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b347d922105d73%3A0xe3e0c08d4877e73!2sPensiunea%20Aron!5e0!3m2!1sen!2sat!4v1675432558796!5m2!1sen!2sat"
            width="auto"
            height="auto"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </section>
  );
};

export default Contact;
