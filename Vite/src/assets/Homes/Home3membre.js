import BlogsListmembre from "../Blogs/BlogsListmembre";
import useFetch from "../useFetch";

const Home3membre = () => {
  const { error, isPending, data:blogs } = useFetch('http://localhost:7000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogsListmembre blogs={blogs} /> }
    </div>
  );
}
 
export default Home3membre;
