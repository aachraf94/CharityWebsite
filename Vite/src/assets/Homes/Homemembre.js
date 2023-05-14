import EvenementsListmembre from "../Evenements/EvenementsListmembre";
import useFetch from "../useFetch";

const Homemembre = () => {
  const { error, isPending, data:evenements } = useFetch('http://localhost:8000/evenements')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { evenements && <EvenementsListmembre evenements={evenements} /> }
    </div>
  );
}
 
export default Homemembre;
