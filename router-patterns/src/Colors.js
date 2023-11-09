import {Link} from "react-router-dom";
import ColorDetail from "./ColorDetail";

const Colors = () => {

    const colors = ['Blue', 'Green', 'Orange', "Yellow"]

    return (
        <div>
           
            <ul>
            {colors.map((c) => {
             return <Link to={`/colors/${c}`}><h1>{c}</h1></Link>
            })}
            </ul>
        </div>
   )
}

export default Colors;