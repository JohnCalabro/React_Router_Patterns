import {useParams} from "react-router-dom";
import './App.css';

const ColorDetail = () => {

    let body = document.getElementsByTagName("body")[0];
   

    const { name } = useParams();
    const color = name.toLocaleLowerCase();
    body.style.backgroundColor = color;

    return (
        <div style={{background : color}}>
            <h1>{name}</h1>
        </div>
    )
}

export default ColorDetail;