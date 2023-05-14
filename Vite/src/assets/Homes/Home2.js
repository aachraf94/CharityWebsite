import BesoinsList from "../Besoins/BesoinsList";
import useFetch from "../useFetch";

const Home2 = () => {
  const { error, isPending, data:besoins } = useFetch('http://localhost:9000/besoins')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { besoins && <BesoinsList besoins={besoins} /> }
    </div>
  );
}
 
export default Home2;
