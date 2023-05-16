import { Link } from "react-router-dom";

const NotFoundPage = () => {


  return (
    <div className="text-center">
      <h1>Page not found (Error 404)</h1>
      <p>The requested page does not exist.</p>
     <Link to="/" > <button >Go to Home</button></Link>
    </div>
  );
};

export default NotFoundPage;
