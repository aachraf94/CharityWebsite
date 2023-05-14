import EvenementsList from "../Evenements/EvenementsList";
import useFetch from "../useFetch";

const Home = () => {
  const { error, isPending, data:evenements } = useFetch('http://localhost:8000/evenements')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { evenements && <EvenementsList evenements={evenements} /> }
    </div>
  );
}
 
export default Home;
