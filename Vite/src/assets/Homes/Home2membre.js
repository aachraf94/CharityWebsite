import BesoinsListmembre from "../Besoins/BesoinsListmembre";
import useFetch from "../useFetch";

const Home2membre = () => {
  const { error, isPending, data:besoins } = useFetch('http://localhost:9000/besoins')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { besoins && <BesoinsListmembre besoins={besoins} /> }
    </div>
  );
}
 
export default Home2membre;
