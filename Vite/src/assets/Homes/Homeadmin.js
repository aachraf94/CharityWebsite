import EvenementsListadmin from "../Evenements/EvenementsListadmin";
import useFetch from "../useFetch";

const Homeadmin = () => {
  const { error, isPending, data:evenements } = useFetch('http://localhost:8000/evenements')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { evenements && <EvenementsListadmin evenements={evenements} /> }
    </div>
  );
}
 
export default Homeadmin;
