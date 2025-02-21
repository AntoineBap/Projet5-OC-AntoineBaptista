import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import appartmentList from "../data/myData.json";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/DropdownText";
import FeaturesList from "../components/FeaturesList";
import "../styles/appartment.scss";

const AppartmentDetail = () => {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const appData = appartmentList.find((app) => app.id === id);
    if (appData === undefined) {
      setNotFound(true); // !appartment = pas d'id correspondant
    }
    setAppartement(appData);
  }, [id]);

  if (notFound) {
    return <Navigate to="/notfound" replace />;
  }

  if (appartement === null) return null; //verifie si appartement est encore null, ce qui signifie que les donnees n'ont pas encore ete chargees

return (
  <div className="appartment">
    <div className="appartment-container">
      <Carrousel pictures={appartement.pictures} />
      <div className="first-row">
        <div className="left">
          <p className="title">{appartement.title}</p>
          <p className="location">{appartement.location}</p>
          <div className="tags">
            {appartement.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="host-info">
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt="photo de l'hote" />
          </div>
          <div className="rating">
            {new Array(5).fill(null).map((_, index) => {
              if (index < appartement.rating) {
                return (
                  <i
                    className="fa-solid fa-star fa-xl"
                    style={{ color: "#FF6060" }}
                    key={index}
                  ></i>
                );
              }
              return (
                <i
                  className="fa fa-solid fa-star fa-neutral fa-xl"
                  style={{ color: "#e3e3e3" }}
                ></i>
              );
            })}
          </div>
        </div>
      </div>
      <div className="second-row">
        <Dropdown
          dropdowntitle="Description"
          dropdowncontent={appartement.description}
        />
        <Dropdown
          dropdowntitle="Equipements"
          dropdowncontent={<FeaturesList features={appartement.equipments} />}
        />
      </div>
    </div>
  </div>
  );
};

export default AppartmentDetail;
