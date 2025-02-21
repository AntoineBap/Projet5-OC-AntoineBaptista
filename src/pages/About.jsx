import React from "react";
import "../styles/about.scss";
import Dropdown from "../components/DropdownText";

const About = () => {
  return (
    <div className="about-container">
      <div className="top-img">
        <img src="/images/background_2.webp"  alt="Background" />
      </div>
      <div className="dropdowns">
        <Dropdown
          dropdowntitle="Fiabilité"
          dropdowncontent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        <Dropdown
          dropdowntitle="Respect"
          dropdowncontent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Dropdown
          dropdowntitle="Service"
          dropdowncontent="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />

        <Dropdown
          dropdowntitle="Sécurité"
          dropdowncontent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};

export default About;
