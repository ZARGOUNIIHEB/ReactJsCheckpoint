import React from 'react';
import './App.css';
import NavBar from './NavBar';
import GetCard from './getCard';
import Accord from './Accord';
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <h1 style={{ color: "#87CEEB", fontWeight: "bolder", width: "100%", height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>First Application Heading</h1>
        <div>
          <GetCard />
        </div>
        <Accord />
      </div>
    </React.Fragment >
  );
}

export default App;
