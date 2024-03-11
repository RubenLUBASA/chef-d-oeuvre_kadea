import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>contactez</span> nous</h1>
      <form action="">
        {<>
  <div className="inputBox">
    <input type="text" placeholder="nom" />
    <input type="email" placeholder="email" />
  </div>
  <div className="inputBox">
    <input type="tel" placeholder="numero" />
    <input type="text" placeholder="objet" />
  </div>
  <textarea
    name=""
    placeholder="message"
    id=""
    cols={30}
    rows={10}
    defaultValue={""}
  />
  <input type="submit" defaultValue="envoyer le message" className="btn" />
</>
}
      </form>
    </section>
  );
};

export default ContactSection;
