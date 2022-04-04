import { Link } from "react-router-dom";
import "./HeroCard.css";

export const HeroCard = ({ id, name, description, thumbnail }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          className="card-img-top card-img-custom"
        />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          {description == "" ? (
            <p className="card-text description-text">
              This character does not have an updated description.
            </p>
          ) : (
            <p className="card-text description-text">{description}</p>
          )}
          <Link to={`./hero/${id}`}>Mas...</Link>
        </div>
      </div>
    </div>
  );
};
