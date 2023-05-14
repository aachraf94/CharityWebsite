import BlogsList from "../Blogs/BlogsList";
import useFetch from "../useFetch";

const Home3 = () => {
  const { error, isPending, data:blogs } = useFetch('http://localhost:7000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogsList blogs={blogs} /> }
    </div>
  );
}
 
export default Home3;
