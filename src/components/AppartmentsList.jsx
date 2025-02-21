import React from "react";
import "../styles/appartmentsList.scss";
import { useNavigate } from "react-router-dom";
import Appartments from "../data/myData.json";

const AppartmentsList = () => {
  const navigate = useNavigate();
  return (
    <div className="gallery">
      <div className="gallery-content">
        <div className="grid">
          {Appartments.map((appartment) => (
            <button
              className="appartment-card"
              key={appartment.id}
              onClick={() => navigate(`/appartment/${appartment.id}`)}
            >
              <p>{appartment.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppartmentsList;
