import { Link } from 'react-router-dom';
import './App.css';

const Dogs = ({dogs}) => {
       console.log('DOGS', dogs)

    return (
        <div>
               <Link to="/">Return Home</Link> 
            <div>
                <Link to={`/dogs/${dogs[0].name}`}>
                <h2>{dogs[0].name}</h2>
                <img className="card" src={dogs[0].src}></img>
                {/* <ul>
                    {dogs[0].facts.map((f) => {
                        return<li>{f}</li>
                    })}
                </ul> */}
                </Link>
                
            </div>

            <div>
                <Link to={`/dogs/${dogs[1].name}`}>
                <h2>{dogs[1].name}</h2>
                <img className="card" src={dogs[1].src}></img>
                </Link>
                {/* <ul>
                    {dogs[0].facts.map((f) => {
                        return<li>{f}</li>
                    })}
                </ul> */}
            </div>

            <div>
                <Link to = {`/dogs/${dogs[2].name}`}>
                <h2>{dogs[2].name}</h2>
                <img className="card" src={dogs[2].src}></img>
                </Link>
                {/* <ul>
                    {dogs[0].facts.map((f) => {
                        return<li>{f}</li>
                    })}
                </ul> */}
            </div>

            <div>
                <Link to = {`/dogs/${dogs[3].name}`}>
                <h2>{dogs[3].name}</h2>
                <img className="card" src={dogs[3].src}></img>
                </Link>
                {/* <ul>
                    {dogs[0].facts.map((f) => {
                        return<li>{f}</li>
                    })}
                </ul> */}
            </div>   
            
        </div>
    )
}

export default Dogs;



// duke={dukeImage}
// perry={perryImage}
// tubby={tubbyImage}
// whiskey={whiskeyImage}