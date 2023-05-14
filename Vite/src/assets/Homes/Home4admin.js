import DemandesList from "../DemmandesList";
import useFetch from "../useFetch";
const Home4admin = () => { 
        const { error, isPending, data:demandes } = useFetch('http://localhost:10000/demandes')
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { demandes && <DemandesList demandes={demandes} /> }
    </div>
  );
}
 
export default Home4admin;