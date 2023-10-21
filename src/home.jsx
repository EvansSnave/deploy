import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>
        Hello
      </p>
      <Link to="/countries"><p>countries</p></Link>
    </div>
  );
}

export default Home;