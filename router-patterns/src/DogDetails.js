import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';

const DogDetails = ({dogs}) => {
    console.log(dogs)
    const { name } = useParams();
    const [dog, setDog] = useState(null)

   console.log(dogs[0])

   useEffect(() => {
    if(name === dogs[0].name){
        console.log('ok!!!')
        setDog(dogs[0])
      
    } else if(name === dogs[1].name){
        setDog(dogs[1])
    } else if(name === dogs[2].name){
        setDog(dogs[2])
    } else if(name === dogs[3].name){
        setDog(dogs[3])
    } 
   }, [dogs, name])

  console.log('DOOOOOG', dog ? dog.src : '')
   
   
    console.log(name)
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {dog ? dog.age : 'Loading...'}</p>
            <img src={dog ? dog.src : 'Loading...'}></img> 
            <ul>
                {dog ? dog.facts.map((f) => {
                    return <li>{f}</li>
                }) : 'Loading ...'}
            </ul>
            <br></br>
            <Link to='/'>Return Home</Link>
            <br></br>
            <Link to='/dogs'>Return to dogs</Link>
        </div>
    )
}

export default DogDetails;

