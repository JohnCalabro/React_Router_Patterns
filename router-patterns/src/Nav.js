import { NavLink } from "react-router-dom"
import './App.css';

const Nav = ({dogs}) => {
    return (
        <div className="navbar">
            <NavLink to={`/dogs/${dogs[0].name}`}>Duke</NavLink>
            <NavLink to={`/dogs/${dogs[1].name}`}>Perry</NavLink>
            <NavLink to={`/dogs/${dogs[2].name}`}>Tubby</NavLink>
            <NavLink to={`/dogs/${dogs[3].name}`}>Whiskey</NavLink>
        </div>
    )
}

export default Nav;

