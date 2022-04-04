import { useParams , Navigate} from "react-router-dom"
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = ({history}) => {
  const {heroId} = useParams();
  const [hero] = getHeroesById(heroId);
  
  const handleReturn = () => {
    console.log(history);
  }

  if (hero.length==0) {
    return (
      <Navigate replace to="/" />
    )
  }
  return (
    <div> 
      <div className="row mt-5">
        <div className="col-4">
          <img src={hero.thumbnail.path+'.'+hero.thumbnail.extension} className="img-thumbnail" />
        </div>
        <div className="col-8">
          <h3>{hero.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego</b> ejemplo</li>
            <li className="list-group-item"><b>Publisher</b> ejemplo</li>
            <li className="list-group-item"><b>First appearance</b> ejemplo</li>
          </ul>
          
          <h5> Characters</h5>
          <p>ejemplo</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>Return</button>
        </div>
      </div>
    </div>
  )
}