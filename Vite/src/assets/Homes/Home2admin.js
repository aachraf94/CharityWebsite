import BesoinsListadmin from "../Besoins/BesoinsListadmin";
import useFetch from "../useFetch";

const Home2admin = () => {
  const { error, isPending, data:besoins } = useFetch('http://localhost:9000/besoins')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { besoins && <BesoinsListadmin besoins={besoins} /> }
    </div>
  );
}
 
export default Home2admin;
