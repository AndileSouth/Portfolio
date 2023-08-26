import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import PROJECTS from "./components/Projects";


function App() {
  
  return (
    
      <div className="App">
         <NavBar/>
         
        <Routes>
          <Route path="/Portfolio" element={<Home/>}/>
          <Route path="projects" element={<PROJECTS/>}/>
        </Routes>
       
        
      </div>
    
  );
}

export default App;



