import './App.css'
import React from "react"
import Data from "./Data"
import ScatteredData from './ScatteredPlot/ScatteredData';
import LineData from './LineChart/LineData';
import Home from './Home';
import Starter from './Starter/Starter';
import {BrowserRouter as Router, Route} from "react-router-dom"
import WorldMapData from './WorldMap/WorldMapData';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/barchart">
          <Data />
        </Route>
        <Route path="/scattered">
          <ScatteredData />
        </Route>
        <Route path="/linedata">
          <LineData />
        </Route>
        <Route path="/worlddata">
          <WorldMapData />
        </Route>
        <Route path="/starter">
            <Starter />
        </Route>
      </Router>
    </div>
  );
}

export default App;
