import React from "react";
import "../styles/featuresList.scss";

const FeaturesList = ({ features = [] }) => {
  return (
    <p className="features-list">
      {features.length > 0 ? (
        features.map((feature, index) => <span key={index}>{feature}</span>)
      ) : (
        <span>Aucun équipement disponible</span>
      )}
    </p>
  );
};

export default FeaturesList;
