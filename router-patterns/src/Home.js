import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Dog App!</h1>
            <Link to="/dogs">See our cute pups!</Link>
            <br></br>
            <Link to="/colors">Check out my color app!</Link>
        </div>
    )
}

export default Home;