import { Link } from "react-router-dom"

export const HeroCard = ({
  id,
  name,
  description,
  thumbnail,
}) => {
  return (
    <div className = "col" >
      <div className="card">
          <img src={thumbnail.path+'.'+thumbnail.extension} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text">{description}</p>
            <Link to={`./hero/${id}`}>
              Mas...
            </Link>
          </div>
      </div>
    </div>
  )
}