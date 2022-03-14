import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";



function App() {

  const handleClick =e=>{
    console.log(e.target.value)
  }


  return (
    <div className="App">
      <button className="toggleForm" 
      onClick={handleClick}>
        {/* Show text Add House or Show Rentals based on state */}
      toggle rent or add house</button>
      {/* Show component based on state */}
      <br />
      <Rentals></Rentals>
      <AddHouse></AddHouse>
    </div>
    
    
  );
}

export default App;
