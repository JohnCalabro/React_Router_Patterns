import dukeImage from './dogImages/duke.jpg';
import perryImage from './dogImages/perry.jpg'
import tubbyImage from './dogImages/tubby.jpg'
import whiskeyImage from './dogImages/whiskey.jpg'
import Dogs from './Dogs';
import DogDetails from './DogDetails';
import Home from './Home';
import Nav from './Nav';
import Colors from './Colors';
import ColorDetail from './ColorDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {

  //dogs are done, color app is closer to done, I've been spedning too much time
  //on this (because it is fun), going to turn this in.
  // I feel confident about react-router patterns so will move on to the next
  //section.
  const dogs = [{
    name: 'Duke',
    age: 3,
    src: dukeImage,
    facts: [ "Duke believes that ball is life.",
    "Duke likes snow.",
    "Duke enjoys pawing other dogs."]
},
{
    name: "Perry",
    age: 4,
    src: perryImage,
    facts: [ "Perry loves all humans.",
    "Perry demolishes all snacks.",
    "Perry hates the rain."]
},
{
    name: "Tubby",
    age: 4,
    src: tubbyImage,
    facts: ["Tubby is really stupid.",
    "Tubby does not like walks.",
    "Angelina used to hate Tubby, but claims not to anymore."]
},
{
    name: "Whiskey",
    age: 4,
    src: whiskeyImage,
    facts: ["Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"]
}

]


  return (
    
    <div className="App">

<BrowserRouter>
    <Nav dogs={dogs}/>
    <Routes>
      <Route path="/" element= {<Home />} ></Route>
      <Route path="/dogs" element={
      <Dogs 
        dogs={dogs}
      />}> </Route>

      <Route 
      path="/dogs/:name"
      element={<DogDetails dogs={dogs}/>}
      
      >
      </Route>
      
      <Route
      path='/colors'
      element = {<Colors />}
      > </Route>

      <Route 
      path="/colors/:name"
      element={<ColorDetail />}
      
      >
      </Route>


     <Route path="*" element={<Home />}/>
     
    </Routes>
    
</BrowserRouter>
     
    </div>



  );
}

export default App;
