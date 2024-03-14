import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service" id="service">
      <h1 className="heading">Nos <span>services</span></h1>
      <div className="box-container">
        {<>
  <div className="box">
    <i className="fa fa-refresh" />
    <h3>Interaction En Temps Réel</h3>
    <p>
      Nous Offrons Des Fonctionnalités De Chat En Direct, De Sondages En Direct
      Et De Sessions De Questions-Réponses Pour Favoriser L'interaction Entre
      Les Participants Et Les Intervenants.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-user" />
    <h3>Gestion Des Intervenants</h3>
    <p>
      Nous Gérons Les Profils Des Intervenants, Les Horaires De Présentation Et
      Les Sessions.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-undo" />
    <h3>Gestion Des Retours </h3>
    <p>
      Nous Collectons des retours des participants après l'événement pour
      evaluer la satisfaction et améliorer les futurs evénements.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-sign-in" />
    <h3>Gestion Des Inscriptions </h3>
    <p>
      Permettre aux participants de s'inscrire et de payer pour assister à
      l'événement
    </p>
  </div>
  <div className="box">
    <i className="fas fa-map-marker-alt" />
    <h3>lieu events</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-television" />
    <h3>Diffusion En Direct</h3>
    <p>
      Nous fournissons une plateforme pour diffuser en Direct l'événement pour
      les participants qui ne peuvent pas y assister en personne.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-calendar" />
    <h3>Calendrier D'événements</h3>
    <p>
      Nous allons afficher un calendrier avec les détails des evénements à venir
      pour que les participants puissent s'y inscrire.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-venus" />
    <h3>Promotion D'événements</h3>
    <p>
      Aider à promouvoir l'événement en ligne via les réseaux sociaux, les
      newsletters, Etc.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-user-plus" />
    <h3>Gestion Des Sponsors</h3>
    <p>
      Permettre aux sponsors de s'associer à l'événement et de promouvoir leurs
      marques.
    </p>
  </div>
  <div className="box">
    <i className="fa fa-ticket" />
    <h3>Gestion Des Billets</h3>
    <p>
      Nous allons générer des billets electroniques, les envoyer aux
      participants et scanner les Billets à l'entrée de l'événement.
    </p>
  </div>

</>
}
      </div>
    </section>
  );
};

export default ServiceSection;
