import BlogsListadmin from "../Blogs/BlogsListadmin";
import useFetch from "../useFetch";

const Home3admin = () => {
  const { error, isPending, data:blogs } = useFetch('http://localhost:7000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogsListadmin blogs={blogs} /> }
    </div>
  );
}
 
export default Home3admin;
